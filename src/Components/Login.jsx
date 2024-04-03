import { useContext, useEffect} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const { sigInUser, user, loading, setUser,setVerified } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        sigInUser(email, password)
            .then(result => {
                const userC = result.user;
                if(userC.emailVerified){
                    setUser(userC)
                    setVerified(true)
                }
                else{
                    alert("Please Verify")
                    return
                }
            })
            .catch(error => {
                console.log("Login Error",error.message);
            });
    };
    useEffect(()=>{
        if(user){
            navigate(location.state)
        }
    },[location.state, navigate, user])

    return (
        <div className="hero bg-[url('/form-bg.jpg')] rounded-xl p-10 mt-16">
            <div className="hero-content flex-col justify-center items-center">
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
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

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <p className='text-sm'>Do Not Have Account ? <Link to={"/register"} className='text-sm text-blue-700 underline btn btn-link'>Register</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;