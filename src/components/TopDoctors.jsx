import React from "react";
import { doctors } from "../assets/assets_frontend/assets";
import TopDoctorCard from "./TopDoctorCard";
import { useNavigate } from "react-router-dom";

const TopDoctors = () => {
  const navigate = useNavigate()
  return (
    <div className="mt-24 flex flex-col items-center gap-5">
      <div>
        <h1 className="text-2xl text-center">Top Doctors to Book</h1>
        <p className="text-sm   text-center text-gray-400">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>
      <div className="flex gap-5 flex-wrap justify-evenly md:mx-16">
        {doctors.slice(0, 10).map((doctor) => (
          <TopDoctorCard
            key={doctor._id}
            image={doctor.image}
            speciality={doctor.speciality}
            name={doctor.name}
            id={doctor._id}
          />
        ))}
      </div>
      <div className="mt-5">
        <button
          onClick={()=>navigate('/doctors')}
          className="px-10  py-2 bg-blue-100 hover:bg-blue-200 rounded-full">
          more
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;
