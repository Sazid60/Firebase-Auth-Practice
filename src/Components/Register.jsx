import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero bg-[url('/login-bg.jpg')] rounded-xl p-10 mt-16">
            <div className="hero-content flex-col justify-center items-center">
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-bordered" required />
                            
                            <div className='mt-3 mb-2 flex items-center gap-2'>
                            <input type="checkbox" name="confirmPassword" required />
                            <p className='text-sm'>Do You Accept Our Terms And Conditions ?</p>
                            </div>

                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className='text-sm'>Already Have Account ? <Link to={"/login"} className='text-sm text-blue-700 underline btn btn-link'>Sign In</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;