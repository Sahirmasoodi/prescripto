import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "../store/userSlice";

const Navbar = () => {
    const navigate = useNavigate()
    const[showNav,setShowNav] = useState(false)
    const[showMenu,setShowMenu] = useState(false)
    const selector = useSelector(state=>state.user.loggedIn)
    const dispatch = useDispatch()
    function handleClick(){
     navigate('/login')
    }
  return (
    <div className="flex justify-between items-center pt-5 pb-2 border-b border-gray-300 -mx-10 sm:mx-0 ">
      <Link to={'/'}>
        <img className="min-w-40 w-44" src={assets.logo} />
      </Link>
      <div className="  hidden  md:flex justify-around w-1/2">
        <NavLink to={"/"}>HOME</NavLink>
        <NavLink to={"/doctors"}>ALL DOCTORS</NavLink>
        <NavLink to={"/about-us"}>AB0UT US</NavLink>
        <NavLink to={"/contact-us"}>CONTACT US</NavLink>
      </div>
      <div>
      {
        selector ? 
        <div className="flex items-center gap-2 group relative cursor-pointer">
            <img className="w-10 rounded-full" src={assets.profile_pic}/>
            <img className="w-2.5" src={assets.dropdown_icon} onClick={()=>setShowMenu(!showMenu)}/>
            <div className="absolute top-0 right-0 pt-14 text-sm  text-gray-600 z-20 hidden group-hover:block" >
            <div className="min-w-40 bg-secondary text-gray-100 flex flex-col items-center gap-4 p-4">
                <p onClick={()=>navigate('/my-profile')} className="hover:text-gray-400 hover:font-bold">My Profile</p>
                <p onClick={()=>navigate('/my-appointments')} className="hover:text-gray-400 hover:font-bold">My Appointments</p>
                <p onClick={()=>{dispatch(isLoggedIn(false));navigate('/login')}} className="hover:text-gray-400 hover:font-bold">Logout</p>
            </div>
            </div>
        
        </div>
        :
        <button 
         onClick={handleClick}
         className="bg-primary w-24 rounded-full px-1 py-2 md:py-2 text-white">
         Signup
        </button>
      }
      </div>
      <img onClick={()=>setShowNav(true)} className="w-6 md:hidden" src={assets.menu_icon}/>
      {/* mobile  */}
      <div className={`${showNav ? 'fixed w-full' : 'h-0 w-0'} md:hidden top-0 bottom-0 right-0 overflow-hidden z-20 transition-all duration-300 bg-background`}>
        <div className="flex items-center justify-between px-5 py-6">
        <Link onClick={()=>setShowNav(false)} to={'/'}> <img className="w-36" src={assets.logo}/></Link>
          <img className="w-7" onClick={()=>setShowNav(false)} src={assets.cross_icon}/>
        </div>
        <ul className="flex flex-col justify-center items-center text-2xl gap-7 mt-5">
        <NavLink onClick={()=>setShowNav(false)} to={"/"}>HOME</NavLink>
        <NavLink onClick={()=>setShowNav(false)} to={"/doctors"}>ALL DOCTORS</NavLink>
        <NavLink onClick={()=>setShowNav(false)} to={"/about-us"}>AB0UT US</NavLink>
        <NavLink onClick={()=>setShowNav(false)} to={"/contact-us"}>CONTACT US</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
