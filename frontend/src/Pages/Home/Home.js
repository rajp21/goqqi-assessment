import { Link } from 'react-router-dom';
import React , { useState, useEffect } from 'react';
import { deleteUser, getAllUsers } from '../../Http';
import notyf from '../../Components/Notyf/Notyf';
const Home = () => {

  const [users, setUsers] = useState([]); 
    
    // fetching the users from backend
    const fetchUsers = async ()  => { 
        try{ 
            let allUsers = await getAllUsers(); 
            setUsers(allUsers.data.users); 

        }catch(error){ 
            console.log(error); 
            notyf.error("Something went wrong"); 
        }
    }

  useEffect(() => { 
        fetchUsers();
  }, []); 


  // delete user 

  async function deletRecord(id){ 
   
        try{ 
            await deleteUser(id);
            notyf.success('User updated successfully'); 
            fetchUsers(); 
        }catch(e){ 
            console.log(e); 
            notyf.error('Something went wrong'); 
        }
  } 

  return (
    <div class="main-content">
    <section class="section">
        <div class="row">
            <div class="col-12">
                <div class="card">

                    <div class="card-header">
                        <h4>All users</h4>
                    </div>
                    <div class="card-body p-0">
                        <div class="container">
                          
                        </div>

                        <div class="table-responsive">
                            <table class="table table-striped">
                                <tr>
                                    <th class="text-center">
                                        Sr. No
                                    </th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>password</th>
                                    <th>DOB</th>
                                    <th>Action</th>
                                </tr>
                             

                                    {
                                        users.lengeth  === 0? <h2>No Data Available</h2>: 

                                        users.map((user, ind) => (
                                            <tr>
                                            <td class="p-0 text-center">
                                              {ind+1}
                                            </td>
                                            <td>{user.name}</td>
    
                                            <td>{user.email}</td>
                                            <td>{user.password}</td>
                                            <td>
                                                <div
                                                    className=""> 
                                                    06/02/2002
                                                    </div>
                                            </td>
                                            <td>
                                                <Link to={`/edit-user/${user.id}`}
                                                    class="btn btn-primary mr-2"><i class="fas fa-edit text-white "></i></Link>
                                                    
    
                                                <button onClick={e => deletRecord(user.id)}
                                                    class="btn btn-danger"><i class="fas fa-trash text-white"></i></button>
                                            </td>
                                        </tr>
                                         ))
                                    
                                    }
                                    

                                    

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
   
</div>
  )
}

export default Home; 
