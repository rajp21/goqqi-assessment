import { DEBUG_MODE } from "../config";


const errorHandler = (err, req, res, next) => { 
    let statusCode = 500; 
    let data = { 
        message: "Something went wrong", 
        ...(DEBUG_MODE === 'development' && { originalError: err.message })
    }
}

export default errorHandler; 