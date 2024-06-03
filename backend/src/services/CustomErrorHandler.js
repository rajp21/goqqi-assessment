

class CustomErrorHandler extends Error { 
    constructor(status, message){
        super(); 
        this.status = status; 
        this.message = message;
    }


    static userAlreadyExist(status=422, message){ 
        return new CustomErrorHandler(422, message); 
    }
}


export default CustomErrorHandler; 