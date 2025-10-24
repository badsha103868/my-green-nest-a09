import React, { use } from "react";
import {Link, NavLink } from "react-router";
import logoImg from "../assets/logo5.jpeg";
import userImg from '../assets/icons8-avatar-48.png'
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
   
  const {user, logOut}= use(AuthContext) 
   
  const handleLogOut=()=>{
     logOut()
     .then(()=>{
      alert("You Logged Out successfully")
     })
     .catch(error =>{
      console.log(error.message)
     })
  }

  const navLinks = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>

      <NavLink to="/plants">
        <li>Plants</li>
      </NavLink>

      <NavLink to="/myProfiles">
        <li>My Profile</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-200 shadow-sm py-2 md:py-3 px-1 md:px-10 lg:px-15 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-5 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        {/* navbar left */}

        <div className="flex items-center gap-1 ">
          <img
            className="w-[35px] h-[35px]  rounded-full ml-1"
            src={logoImg}
            alt=""
          />
          <h3 className=" font-bold text-lg md:text-xl text-[#2E7D32] ">
            GREEN-NEST
          </h3>
        </div>
      </div>
      {/* navbar center */}
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {/* navbar right */}
      <div className="navbar-end ">
       {user ? (<div className="dropdown relative">
          <img tabIndex={0} className="w-12 h-12 rounded-full" src={user.photoURL || userImg} alt="avatar" />
           
           <ul tabIndex="0" className="dropdown-content menu bg-base-100 rounded-box  w-48 p-1 left-1/2 -translate-x-1/2 absolute z-50 shadow-sm">
          <li><a>{ user.displayName || "Badsha" }</a></li>
           <li><a onClick={handleLogOut} >Logout</a></li>
           </ul>
          </div>): (
          // Logged out view
          <div className=" flex space-x-2">
            <Link to='/auth/login/'> 
            <button className="btn btn-primary bg-[#2E7D32] px-5">Login</button>
            </Link>
            <Link to='/auth/signUp'>
            <button className="btn btn-primary bg-[#3b82f6] px-5">Sign Up</button>
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;
