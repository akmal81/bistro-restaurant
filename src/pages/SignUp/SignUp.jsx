import authImage from '../../assets/auth/authImage.png'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);
    }

    return (
        <div className='bg-authBg bg-no-repeat  bg-center bg-cover min-h-screen flex items-center justify-center'>
            <div className="bg-authBg bg-no-repeat  drop-shadow-authShadow  py-20 lg:px-20  bg-center bg-cover w-10/12  flex flex-col lg:flex-row gap-20 items-center justify-between">
                <div className='w-full lg:w-2/3 mx-auto'>
                    <img src={authImage} alt="" className='object-cover' />
                </div>
                <div className='w-full lg:w-1/2 px-10'>
                    <form onSubmit={handleSignUp} className="w-full">
                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        {/* photo */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" required />
                        </div>
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
                            <input type="email" placeholder="email" className="input input-bordered" required />
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
                    <p className=' mt-6'>Already have an account Please <Link to='/login' className='text-red-600'>Login</Link> </p>
                </div>
            </div>
        </div>
    )
};

export default SignUp;