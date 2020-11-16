import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import './Login.scss'

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="login-wrapper">
            <Header></Header>
            <div className="login-container container mt-5 ">
                <div className="from-group form-container login-form mx-auto p-3">
                    {!newUser && <h2 className="mb-3" >Log in</h2>}
                    {newUser && <h2 className="mb-3" >Create an account</h2>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {newUser && <div className="form-group">
                            <input name="firstName" ref={register({ required: true })} type="text" className="form-control" id="" placeholder="Enter your first name" />
                            {errors.firstName && <span>This field is required</span>}
                        </div>}
                        {newUser && <div className="form-group">
                            <input name="lastName" ref={register({ required: true })} type="text" className="form-control" id="" placeholder="Enter your last name" />
                            {errors.lastName && <span>This field is required</span>}
                        </div>}
                        <div className="form-group">
                            <input name="email" ref={register({ required: true })} type="text" className="form-control" id="" placeholder="Enter your email" />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input name="password" ref={register({ required: true })} type="password" className="form-control" id="" placeholder="Password" />
                            {errors.password && <span>This field is required</span>}
                        </div>
                        {newUser && <div className="form-group">
                            <input name="password" ref={register({ required: true })} type="password" className="form-control" id="" placeholder="Confirm password" />
                            {errors.password && <span>This field is required</span>}
                        </div>}
                        {!newUser && <div className="d-flex justify-content-between my-2" >
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="">Remember me</label>
                            </div>
                            <div className="form ">
                                <a href="/" className="login-link">Forget  password</a>
                            </div>
                        </div>}
                        {!newUser && <input type="submit" value="Login" className="btn btn-custom text-white  mt-3 d-block w-75 mx-auto " />}
                        {newUser && <input type="submit" value="Create an account" className="btn btn-custom text-white  mt-3 d-block w-75 mx-auto " />}
                    </form>

                    {!newUser && <div className="d-flex justify-content-center mt-3" >
                        <p>Do not have account  ? </p>
                        <Link onClick={() => setNewUser(!newUser)} className="ml-3 login-link">Create an account</Link>
                    </div>}
                    {newUser && <div className="d-flex justify-content-center mt-3" >
                        <p>Already have an account  ? </p>
                        <Link onClick={() => setNewUser(!newUser)} className="ml-3 login-link">Login</Link>
                    </div>}
                </div>
                <div className="or-line d-flex justify-content-center" > <hr className="ml-auto" /> Or <hr className="mr-auto" /></div>
                <button className="text-left d-flex sign-btn mx-auto align-items-center">
                    <img className="m-1" src="https://i.imgur.com/hPkbIgr.png" alt="" />
                    <h6 className="m-2 mx-5" >Continue with facebook </h6>
                </button>
                <button className="text-left d-flex sign-btn mx-auto align-items-center">
                    <img className="m-1" src="https://i.imgur.com/aneJZWX.png" alt="" />
                    <h6 className="m-2 mx-5" >Continue with google </h6>
                </button>
            </div>
        </div>
    );
};

export default Login;