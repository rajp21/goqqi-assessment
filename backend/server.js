import express from 'express'; 
import { APP_PORT } from './src/config';
import errorHandler from './src/middlewares/errorHandler';
import apiRouter from './src/routes/api';
import webRouter from './src/routes/web';
import sequelize from './src/config/db';


const app = express(); 
const port = APP_PORT ? APP_PORT : 5001; 

// database connection 
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
 

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


app.use('/api', apiRouter);

app.use(errorHandler); 


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 