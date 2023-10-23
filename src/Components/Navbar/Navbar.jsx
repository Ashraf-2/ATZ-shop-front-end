/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useTheme } from "../../Hooks/UseTheme";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const {changeTheme,mode} = useTheme();


    const handleSignOut = () => {
        logOut()
            .then(res => console.log('successfully logged out'))
            .catch(error => console.log(error))
    }
    const navlinks = <>
        <li className="dark:bg-red-400 dark:text-white"><NavLink to="/">Home</NavLink></li>
        <li className="dark:bg-red-400 dark:text-white"><NavLink to="/addProduct">Add Product</NavLink></li>
        <li className="dark:bg-red-400 dark:text-white"><NavLink to="/myCart">My Cart</NavLink></li>
    </>
    return (
        
            <div className="navbar px-10 bg-pink-100 dark:bg-slate-900 dark:text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <img src="https://imagizer.imageshack.com/v2/320x240q70/924/js0enr.png" alt="logo-img" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex items-center">
                                <p onClick={changeTheme} className="rounded-xl mr-4 text-xl
                                ">{mode ==="dark"?<MdOutlineDarkMode></MdOutlineDarkMode>:<MdDarkMode></MdDarkMode>}</p>

                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full ">
                                            <img src={user.photoURL?user.photoURL : "no pic"} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 dark:bg-slate-700 dark:text-white">
                                        <li>
                                            <a className="justify-between">
                                                {user.displayName ? user.displayName : "null"}
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><a>{user.email? user.email: "null"}</a></li>
                                        <li><a href="/" onClick={handleSignOut}><button>Logout</button></a></li>
                                    </ul>
                                </div>
                                {/* <Link to="/"><button onClick={handleSignOut} className="btn">Sign Out</button></Link> */}
                            </div>
                            :
                            <div className="flex items-center gap-1">
                                <p onClick={changeTheme} className="rounded-xl mr-4 text-xl cursor-pointer
                                ">{mode ==="dark"?<MdOutlineDarkMode></MdOutlineDarkMode>:<MdDarkMode></MdDarkMode>}</p>

                                <Link to="/login">
                                    <button className="btn">Login</button>
                                </Link>
                                <Link to="/signup">
                                    <button className="btn">Sing Up</button>
                                </Link>
                            </div>
                    }
                </div>
            
            </div>
        
    );
};

export default Navbar;