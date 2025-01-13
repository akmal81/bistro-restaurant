import { useForm } from 'react-hook-form';
import authImage from '../../assets/auth/authImage.png'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useAuth from '../../hooks/useAuth';
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useState } from 'react';

const SignUp = () => {
    const { createUser } = useAuth();
    const [show, setShow] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
            })
        // reset()
    }
    return (

        <>
            <Helmet>
                <title>Sign Ud || BB</title>
            </Helmet>
            <div className='bg-authBg bg-no-repeat  bg-center bg-cover min-h-screen flex items-center justify-center'>
                <div className="bg-authBg bg-no-repeat  drop-shadow-authShadow  py-20 lg:px-20  bg-center bg-cover w-10/12  flex flex-col lg:flex-row gap-20 items-center justify-between">
                    <div className='w-full lg:w-2/3 mx-auto'>
                        <img src={authImage} alt="" className='object-cover' />
                    </div>
                    <div className='w-full lg:w-1/2 px-10'>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    {...register("name", { required: true })}
                                    type="text"
                                    name='name'
                                    placeholder="Name"
                                    className="input input-bordered" />
                            </div>

                            {errors.name && <span className='text-red-600'>Name is required</span>}

                            {/* photo */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input
                                    {...register("photo", { required: true })}
                                    type="text"
                                    name='photo'
                                    placeholder="Photo Url"
                                    className="input input-bordered"
                                />
                            </div>

                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", {
                                    required: true
                                })}
                                    type="email"
                                    name='email'
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                            </div>

                            {errors.email && <span className={`text-red-600 ${!errors.email ? 'invisible' : 'visible'}`}>Email is required</span>}

                            {/* Recaptcha */}
                            {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div> */}
                            {/* password */}
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    {...register("password", {
                                        required: true,
                                        minLength: 6, maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                                    })}
                                    type={show ? 'text' : 'password'}
                                    name='password'
                                    placeholder="password"
                                    className="input input-bordered"
                                />

                                {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password must be less then 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-600'>Password must have 1 uppercase 1 lower case and 1 special characters</span>}

                                <button
                                    onClick={(e) => { e.preventDefault(); setShow(!show) }}
                                    className="absolute bottom-12 right-4">
                                    {
                                        show ?
                                            <FaRegEyeSlash />
                                            :
                                            <FaRegEye />
                                    }
                                </button>

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-primary text-white">Login</button>
                            </div>
                        </form>
                        <p className=' mt-6'>Already have an account Please <Link to='/login' className='text-red-600'>Login</Link> </p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SignUp;