import React from 'react';
import authImage from '../../assets/auth/authImage.png'
import { Link } from 'react-router-dom';

const Login = () => {


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div className='bg-authBg bg-no-repeat  bg-center bg-cover min-h-screen flex items-center justify-center'>
            <div className="bg-authBg bg-no-repeat  drop-shadow-authShadow  py-20 lg:px-20  bg-center bg-cover w-10/12  flex flex-col lg:flex-row gap-20 items-center justify-between">
                <div className='w-full lg:w-2/3 mx-auto'>
                    <img src={authImage} alt="" className='object-cover' />
                </div>
                <div className='w-full lg:w-1/2 px-10'>
                    <form onSubmit={handleLogin} className="w-full">
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        {/* Recaptcha */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="Cap" placeholder="email" className="input input-bordered" required />
                        </div> */}
                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-primary text-white">Login</button>
                        </div>
                    </form>
                    <p className=' mt-6'>Don't have an account Please <Link to='/signUp' className='text-red-600'>Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};



export default Login;