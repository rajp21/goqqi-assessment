import { ValidationError } from "joi";
import { DEBUG_MODE } from "../config";
import CustomErrorHandler from "../services/CustomErrorHandler";


const errorHandler = (err, req, res, next) => { 
    let statusCode = 500; 
    let data = { 
        message: "Something went wrong", 
        ...(DEBUG_MODE === 'true' && { originalError: err.message })
    }

    // invalid JSON 
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        data.error='Bad JSON syntax',
        statusCode=400
    }   

    if(err instanceof ValidationError){
        statusCode = 422; 
        data.message = err.message
    }


    if(err instanceof CustomErrorHandler){ 
        statusCode = err.status, 
        data.message = err.message
    }

    return res.status(statusCode).json(data);
}

export default errorHandler; 