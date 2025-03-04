import { Link, NavLink, useNavigate, } from "react-router-dom";
import logo from "../../assets/logo.png"
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

import useAuth from "../../hooks/useAuth";

const Navbar = () => {
 
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(result => {
        // console.log(result.user);
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      })
  }

  const navLink = <div className="flex items-center">
    <li className="font-bold text-sm hover:text-[#ffb606] hover:border-b border-b-[#b18b5e]"><NavLink to='/' className={({ isActive }) => isActive ? '  text-[#ffb606]' : 'text-[#131313CC] hover:text-[#ffb606]'}>Home</NavLink></li>

    <li className="font-bold text-sm hover:text-[#b18b5e] shadow-none hover:border-b border-b-[#ffb606] bg-white"><NavLink to='/addFood' className={({ isActive }) => isActive ? 'text-[#ffb606] ' : 'hover:text-[#ffb606] text-[#131313CC]'}>Add Food</NavLink></li>

    <li className="font-bold text-sm hover:text-[#ffb606] shadow-none hover:border-b border-b-[#b18b5e] bg-white"><NavLink to='/myFood' className={({ isActive }) => isActive ? 'text-[#ffb606] ' : 'hover:text-[#ffb606] text-[#131313CC]'}>Manage My Foods</NavLink></li>

    <li className="font-bold text-sm hover:text-[#ffb606] shadow-none hover:border-b border-b-[#ffb606] bg-white"><NavLink to='/available' className={({ isActive }) => isActive ? 'text-[#ffb606] ' : 'hover:text-[#ffb606] text-[#131313CC]'}>Available Foods</NavLink></li>
    <li className="font-bold text-sm hover:text-[#ffb606] shadow-none hover:border-b border-b-[#ffb606] bg-white"><NavLink to='/requestedFood' className={({ isActive }) => isActive ? 'text-[#ffb606] ' : 'hover:text-[#ffb606] text-[#131313CC]'}>My Food Request</NavLink></li>



    {/* { user && <>
      <li><NavLink to='/contactUs' className={({ isActive }) => isActive ? 'border border-green-600 text-[#23BE0A]' : 'text-[#131313CC]'}>Contact Us</NavLink></li> */}

  </div>
  return (
    <div className="navbar container px-4 mx-auto mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-xs dropdown-content mt-3 z-[1] p-1  w-52">
            {navLink}
          </ul>
        </div>
        <div>
          <img className="w-44" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        {user ?
          <div className="flex items-center gap-1 lg:gap-5">
            
            <div className="">
              <img className="object-cover w-10 lg:w-14 h-10 lg:h-14 rounded-full ring ring-gray-300 dark:ring-gray-600 my-anchor-element" src={user?.photoURL || 'Image not found'} alt="" />
              <Tooltip className="z-20 text-[#ffb606]" variant="" anchorSelect=".my-anchor-element" place="top">
                {user?.displayName}
              </Tooltip>
            </div>
            <Link to='/'>
              <button onClick={handleLogOut} className="px-1 lg:px-3 font-semibold text-xs lg:text-base text-white bg-[#ffb606] rounded py-2">Sign out</button>
            </Link>
          </div> :
          <div>
            <Link to='/login'>
              <button className="px-2 lg:px-3 font-semibold text-xs lg:text-base text-white bg-[#ffb606] rounded py-2">Login</button>
            </Link>
            <Link to='/register'>
              <button className="px-2 lg:px-3 ml-1 lg:ml-2 font-semibold text-xs lg:text-base text-white bg-[#ffb606] rounded py-2">Register</button>
            </Link>
          </div>
        }
        
      </div>
    </div >
  );
};

export default Navbar;