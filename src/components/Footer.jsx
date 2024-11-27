import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
  return (
    <div className="mt-10 border-t-2">
    <div className="mt-5 flex justify-between flex-wrap gap-5 p-10">
      <div className="w-1/3 min-w-60 ">
        <img className="w-52" src={assets.logo} />
        <p className="text-sm text-gray-600">
          Convenient online doctor consultations and prescriptions at your
          fingertips. Book, consult, and get your prescriptions—all from home.
        </p>
      </div>
      <div>
        <p className="font-bold mb-3">COMPANY</p>
        <ul className="text-sm text-gray-600">
          <li onClick={()=>navigate('/')}>Home</li>
          <li onClick={()=>navigate('/about-us')}>About us</li>
          <li onClick={()=>navigate('/contact-us')}>Contact us</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div>
        <p className="font-bold mb-3">GET IN TOUCH</p>
        <ul className="text-sm text-gray-600 list-none">
          <li>+917051747966</li>
          <li>prescripto@yahoo.com</li>
        </ul>
      </div>
    </div>
    <div className="border-t-2 text-center text-gray-500 mt-5 text-sm ">
    Copyright © 2024 sahir - All Right Reserved
    </div>
    </div>
  );
};

export default Footer;
