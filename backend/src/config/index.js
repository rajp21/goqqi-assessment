import dotenv from 'dotenv'; 

dotenv.config();

export const  { 
    APP_PORT, 
    DEBUG_MODE, 
    DB_HOST, 
    DB_PORT, 
    DB_USERNAME,
    DB_PASSWORD, 
    DB_NAME, 
    DB_DILECT
} = process.env;