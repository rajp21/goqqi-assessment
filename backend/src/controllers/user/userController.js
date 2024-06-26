import User from "../../models/user.model";
import Joi from 'joi'; 
import CustomErrorHandler from "../../services/CustomErrorHandler";

const userController = { 
    async addUser(req, res, next){ 
        // validating the request
        const userSchema = Joi.object({ 
            name: Joi.string().min(2)
            .max(50)
            .pattern(/^[A-Za-z ]*$/)
            .required()
            .messages({
              'string.base': 'Name must be a string',
              'string.empty': 'Name is required',
              'string.min': 'Name must be at least {#limit} characters long',
              'string.max': 'Name must be at most {#limit} characters long',
              'string.pattern.base': 'Name must only contain alphabets and spaces'
            }), 
            
            email: Joi.string()
            .email({tlds: {allow: false}})
            .required()
            .messages({ 
                'string.base': 'Email must be a string',
                'string.empty': 'Email is required',
                'string.email': 'Email must be a valid email address'
            }), 
            
            password: Joi.string()
            .min(6) 
            .max(30)
            .required()
            .messages({
              'string.base': 'Password must be a string',
              'string.empty': 'Password is required',
              'string.min': 'Password must be at least {#limit} characters long',
              'string.max': 'Password must be at most {#limit} characters long'
            }), 

            dob: Joi.date()
            .iso()
            .max('now') 
            .required()
            .messages({
              'date.base': 'Date of birth must be a valid date',
              'date.empty': 'Date of birth is required',
              'date.format': 'Date of birth must be in ISO 8601 format (YYYY-MM-DD)',
              'date.max': 'Date of birth cannot be in the future'
            })         
        }); 


        const {error} = userSchema.validate(req.body); 
      
        if(error) return next(error); 

        // checking weather user already exist or not
        let exist; 

        try{ 
            exist = await User.findOne({where: {email: req.body.email}}); 
        }catch(error){
            return next(error); 
        }
        

        if(exist){ 
            return next(CustomErrorHandler.userAlreadyExist(422, "User Already Exist")); 
        }
        

        // storing the user in the db
        let user; 
        try {
            user = await User.create(req.body); 
        }catch(error){ 
            return next(error); 
        }
        
        return res.status(200).json({
            success: true, 
            user: user
        }); 
    }, 

    async getUsers(req, res, next){ 
        let users; 
        try{ 
            users = await User.findAll(); 
        }catch(error){ 
            return next(error); 
        }

        return res.status(200).json({
            success: true, 
            users
        }); 
    }, 

    async updateUser(req, res, next){ 
        const userSchema = Joi.object({ 
            userId: Joi.number()
            .integer() 
            .positive() 
            .required()
            .messages({
              'number.base': 'User ID must be a number',
              'number.integer': 'User ID must be an integer',
              'number.positive': 'User ID must be a positive number',
              'any.required': 'User ID is required'
            }),

            name: Joi.string().min(2)
            .max(50)
            .pattern(/^[A-Za-z ]*$/)
            .required()
            .messages({
              'string.base': 'Name must be a string',
              'string.empty': 'Name is required',
              'string.min': 'Name must be at least {#limit} characters long',
              'string.max': 'Name must be at most {#limit} characters long',
              'string.pattern.base': 'Name must only contain alphabets and spaces'
            }), 
            
            email: Joi.string()
            .email({tlds: {allow: false}})
            .required()
            .messages({ 
                'string.base': 'Email must be a string',
                'string.empty': 'Email is required',
                'string.email': 'Email must be a valid email address'
            }), 
            
            password: Joi.string()
            .min(6) 
            .max(30)
            .required()
            .messages({
              'string.base': 'Password must be a string',
              'string.empty': 'Password is required',
              'string.min': 'Password must be at least {#limit} characters long',
              'string.max': 'Password must be at most {#limit} characters long'
            }), 

            dob: Joi.date()
            .iso()
            .max('now') 
            .required()
            .messages({
              'date.base': 'Date of birth must be a valid date',
              'date.empty': 'Date of birth is required',
              'date.format': 'Date of birth must be in ISO 8601 format (YYYY-MM-DD)',
              'date.max': 'Date of birth cannot be in the future'
            })         
        }); 


        const {error} = userSchema.validate(req.body); 

        if(error) return next(error); 

        let updatedUer; 

        try{ 
            updatedUer = User.update(req.body, {where: {id: req.body.userId}}); 
        }catch(error){ 
            return next(error); 
        }



        return res.status(200).json({
            success: true, 
            message: "User has been successfully updated"
        })

    }, 

    async deleteUser(req, res, next){ 
        
        const {id} = req.params; 
        let rowsAffected; 

        try{    
           rowsAffected = await User.destroy({ where: { id: id } }); 
        }catch(error) {
            return next(error); 
        }

        return res.status(200).json({
            success: true, 
            message: "user deleted successfully"
        });     
    }, 

    async getUser(req, res, next){
        const {id}=  req.params; 
        let user; 
        try{ 
            user =  await User.findOne({where: {id: id}}); 
            return res.status(200).json({
                success: true, 
                user
            }); 
        }catch(error){ 
            return next(error); 
        }


    }
}

export default userController; 