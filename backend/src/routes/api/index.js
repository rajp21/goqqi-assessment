import express from 'express'; 
import {userController} from '../../controllers';


const apiRouter = express.Router(); 

apiRouter.post('/add-user', userController.addUser);
apiRouter.get('/get-users', userController.getUsers); 
apiRouter.put('/update-user', userController.updateUser); 
apiRouter.delete('/delete-user', userController.deleteUser);


export default apiRouter; 