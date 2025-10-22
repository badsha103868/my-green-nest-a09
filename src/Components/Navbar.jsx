import React from 'react';
import { Link, NavLink } from 'react-router';
import logoImg from '../assets/logo.png'

const Navbar = () => {

  const navLinks = <> 
    <NavLink to='/'><li >Home</li></NavLink>

    <NavLink to='/plants'><li>Plants</li></NavLink>
   
    <NavLink to='/myProfiles'><li >My Profile</li></NavLink>
 
  </>
  return (
    <div className="navbar bg-[#ffffff] shadow-sm py-2 md:py-3 px-1 md:px-10 lg:px-15 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {navLinks}
      </ul>
    </div>

    {/* navbar left */}
   
      <div className='flex items-center gap-1 '>
       <img className='w-[35px] h-[35px] md:w-[40px] md:h-[40px] rounded-xl ' src={logoImg } alt="" />
      <h3 className=" font-bold text-lg md:text-xl text-[#632ee3] ">GREEN-NEST</h3>
    </div>
 
  </div>
  {/* navbar center */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  {/* navbar right */}
  <div  className="navbar-end ">
    <a  className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white text-base  font-semibold ">Login</a>
  </div>
   </div>
  
  );
};

export default Navbar;