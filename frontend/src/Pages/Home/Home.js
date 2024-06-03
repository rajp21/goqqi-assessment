import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
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
                             

                                    <tr>
                                        <td class="p-0 text-center">
                                         1
                                        </td>
                                        <td>Raj</td>

                                        <td>raj430499@gmail.com</td>
                                        <td>8830194017</td>
                                        <td>
                                            <div
                                                className=""> 
                                                06/02/2002
                                                </div>
                                        </td>
                                        <td>
                                            <Link to={`/edit-user/${1}`}
                                                class="btn btn-primary mr-2"><i class="fas fa-edit text-white "></i></Link>
                                                

                                            <a href="{{ route('web.delete-contact', $contact->id) }}"
                                                class="btn btn-danger"><i class="fas fa-trash text-white"></i></a>
                                        </td>
                                    </tr>

                                    

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
