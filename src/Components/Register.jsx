import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser, verifyEmail,user} = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        console.log(email, password, name, confirmPassword)
        createUser(email, password)
            .then(result => {
                // console.log(result.user)
                const cUser = result.user
                console.log("Successfully Registered")
                // setUser name and Photo Url
                updateProfile(cUser,{
                    displayName : name,
                    photoURL :"https://i.ibb.co/fVgQ0KT/Young-JOnas-0.webp"
                })
                    .then(() => {
                        console.log("Profile Updated")
                    })
                    .catch((error) => {
                        console.log(error)
                    })


                // Email Verification
                verifyEmail(cUser)
                    .then(() => {
                        alert("Check Your Email & Verify")
                    })
                    .catch(error => {
                        console.log(error.message)
                    })

            })
            .catch(error => {
                console.log(error.message)
            })
    }


    return (
        <div className="hero bg-[url('/login-bg.jpg')] rounded-xl p-5 mt-7">
            <div className="hero-content flex-col justify-center items-center">
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>
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
                                <input type="checkbox" required />
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