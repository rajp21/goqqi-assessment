import express from 'express'; 
import { APP_PORT } from './src/config';
import errorHandler from './src/middlewares/errorHandler';


const app = express(); 
const port = APP_PORT ? APP_PORT : 5001; 


app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


app.use(errorHandler); 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 