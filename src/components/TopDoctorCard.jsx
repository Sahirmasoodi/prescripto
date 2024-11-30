import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const TopDoctorCard = ({ name, image, speciality ,id}) => {
  
  return (
    <Link to={`/my-appointments/${id}`} className=" border rounded-lg hover:-translate-y-3 transition-all duration-500">
      <div className="bg-blue-100  rounded-t-lg">
        <img className="w-52 min-w-40 " src={image} />
      </div>
      <div className="ps-3 py-4 ">
      <div className="text-[11px] text-green-500 flex items-center gap-1"><p className="size-1.5 bg-green-500 rounded-full"></p>Available</div>
        <h3 className="text-sm text-gray-800">{name}</h3>
        <p className="text-[11px] text-gray-400">{speciality}</p>
      </div>
    </Link>
  );
};

export default TopDoctorCard;
