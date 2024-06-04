import axios from 'axios'; 


const api = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
}); 


export const getAllUsers = () =>  api.get('/get-users'); 
export const saveUser = (data) => api.post('/add-user',data); 
export const getSingleUser  = (id) => api.get(`/get-user/${id}`); 
export const updateUser = data => api.put('/update-user', data); 
export const deleteUser = id => api.delete(`/delete-user/${id}`); 

export default api; 
