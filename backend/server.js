import express from 'express'; 
import { APP_FRONTEND_URL, APP_PORT } from './src/config';
import errorHandler from './src/middlewares/errorHandler';
import apiRouter from './src/routes/api';
import sequelize from './src/config/db';
import cors from 'cors'; 

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

// write a cors options for me 

const corsOptions = {
   origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3302', APP_FRONTEND_URL], 
   methods: ['GET', 'POST','PUT', 'DELETE'], 
   allowedHeaders: ['Content-Type', 'Authorization'],
   exposedHeaders: ['Content-Length'], 
   credentials: true, 
   maxAge: 3600 
 };


app.use(cors(corsOptions)); 


app.use('/api', apiRouter);

app.use(errorHandler); 


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 