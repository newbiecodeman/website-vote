import React from "react";
import {Link, useNavigate} from "react-router-dom"

function Registrasi (){

    let Navigate = useNavigate();
    return(
        <div className='Registrasi template d-flex justify-content-center align-items-center vh-100' data-aos="fade-up" data-aos-duration="1000">
            <div className="container">
            <h1 className="row justify-content-center">Form Registrasi</h1>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" placeholder="Username" className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label>email</label>
                                    <input type="text" placeholder="email" className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="Password" placeholder="Password" className="form-control"/>
                                </div>

                                <button className="btn btn-danger mt-2">Registrasi</button>{' '}
                                <Link to={"/login"} className="btn btn-warning mt-2">
                                    Batal
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registrasi