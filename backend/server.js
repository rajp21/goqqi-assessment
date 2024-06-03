import express from 'express'; 
import { APP_PORT } from './src/config';
import errorHandler from './src/middlewares/errorHandler';
import apiRouter from './src/routes/api';
import sequelize from './src/config/db';
import User from './src/models/user.model';


const app = express(); 
const port = APP_PORT ? APP_PORT : 5001; 


// Disabling the sequalize default logs 
sequelize.options.logging = false;


// database connection 
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    return sequelize.sync();
 }).then(() => { 
    console.log('database syncronized'); 
 }) 
 .catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
 



app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


app.use('/api', apiRouter);

app.use(errorHandler); 


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 