import React from 'react'
import {Link, useNavigate} from "react-router-dom"

function Login() {
    
    let Navigate =useNavigate();

    return (
        <div className='login template d-flex justify-content-center align-items-center vh-100' data-aos="fade-up" data-aos-duration="1000">
            <div className="container">
                <h1 className="row justify-content-center">Form Login</h1>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" placeholder="Username" className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Password" className="form-control" />
                                </div>

                                <div className='row'> 
                                    <div className='col-md-6'>
                                        <button className="btn btn-danger mt-2" onClick={() => Navigate("/")}>Login</button>
                                    </div>

                                    <div className='col-md-6'>
                                        <Link to="/registrasi" className='btn btn-danger mt-2' >
                                        Form Registrasi
                                        </Link>

                                        <div className='col-md-20'>
                                        <Link to="/admin" className='btn btn-danger mt-2' onClick={() => Navigate("/admin")} >
                                        Login Sebagai Admin
                                        </Link>
                                    </div>
                                    </div>
                                </div> 
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Login