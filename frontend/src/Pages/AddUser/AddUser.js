import React from 'react'; 
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { saveUser } from '../../Http';
import notyf from '../../Components/Notyf/Notyf';



const AddUser = () => {

    
    const formik = useFormik({ 
        initialValues: {
            name: '',
            email: '',
            password: '',
            dob: '',
        },

        validationSchema:Yup.object().shape({ 
            name: Yup.string().required('First Name is required'),
            email: Yup.string().email('Invalid email format').required('Email is required'),
            password: Yup.string().required('Password is required'),
            dob: Yup.string().required('Date of Birth is required'),
        }),

        onSubmit:  async (values, { resetForm }) => {
            try{
                await saveUser(values); 
                notyf.success("User Added Successfully"); 
                resetForm(); 
            }catch(error){ 
                notyf.error(error?.response?.data?.message); 
            }
        }
    }); 
 

  return (
    <div class="main-content">
        <section class="section">
            <div class="row ">
                <div class="col-12 col-md-6 col-lg-12">
                <form onSubmit={formik.handleSubmit}>
                    <div class="card">
                        <div class="card-header">
                            <h4>Add User</h4>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label>Name  <span className='required-input-field'>*</span></label>
                                <input type="text" class="form-control"
                                   name="name" 
                                   onChange={formik.handleChange}
                                   value={formik.values.name}
                                   placeholder='Enter Your Name'
                                    
                                />

                                    <div class="invalid-feedback-error" >
                                    {formik.touched.name && formik.errors.name ? (
                                        <div>{formik.errors.name}</div>
                                    ) : null}  
                                    </div>
                            </div>

                            <div class="form-group">
                                <label for="email">Email  <span className='required-input-field'>*</span></label>
                                <input id="email" type="email" class="form-control @errorClass('email')" name="email"  
                                 onChange={formik.handleChange}
                                 value={formik.values.email}
                                 placeholder='Enter Your Email'
                                 
                                 />

                                <div class="invalid-feedback-error" >
                                    {formik.touched.email && formik.errors.email ? (
                                        <div>{formik.errors.email}</div>
                                    ) : null}  
                                </div>
                               
                              </div>

                              <div class="form-group">
                                <label for="password">Password  <span className='required-input-field'>*</span></label>
                                <input id="password" type="password" class="form-control" name="password" 
                            
                                onChange={formik.handleChange}
                                 value={formik.values.password}
                                
                                  />

                                <div class="invalid-feedback-error" >
                                    {formik.touched.password && formik.errors.password ? (
                                        <div>{formik.errors.password}</div>
                                    ) : null}  
                                    </div>
                                
                              </div>



                            <div class="form-group">
                                <label>Dob <span className='required-input-field'>*</span></label>
                                <input type="date" class="form-control " name="dob"
                                
                                onChange={formik.handleChange}
                                value={formik.values.dob}
                                />

                                <div class="invalid-feedback-error" >
                                    {formik.touched.dob && formik.errors.dob ? (
                                        <div>{formik.errors.dob}</div>
                                    ) : null}  
                                    </div>
                            </div>
                            
                        </div>
                        <div class="card-footer text-right">
                            <button class="btn btn-primary mr-1" type="submit">Submit</button>
                            <button class="btn btn-secondary" type="reset">Reset</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AddUser; 