import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
    const { signOutUser, user } = useContext(AuthContext)

    const navLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        { !user &&
            <>
                <li><NavLink to={"/login"}>Login</NavLink></li>
                <li><NavLink to={"/register"}>Register</NavLink></li>
            </>
        }
        <li><NavLink to={"/about"}>About</NavLink></li>
        {user && <>
            
            <li><NavLink to={"/profile"}>Profile</NavLink></li>
        </>
        }
    </>
    // Sign Out  
    const handleSignOut = () => {

        signOutUser()
            .then(() => {
                console.log("User Logged Out")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost text-2xl font-bold">Sic-Mondus</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3">
                    {navLinks}
                </ul>
            </div>
            {
                user ?
                    <div className="navbar-end flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <img className="h-6 w-6 rounded-full" src={user.photoURL} alt="" />
                            <p>{user.displayName}</p>
                        </div>
                        <a className="btn btn-sm" onClick={handleSignOut}>Sign Out</a>
                    </div> :
                    <div className="navbar-end">
                        <a className="btn btn-sm">Sign In</a>
                    </div>

            }
        </div>
    );
};

export default Navbar;