import React, { useEffect, useState } from 'react'
import { doctors } from '../assets/assets_frontend/assets'
import TopDoctorCard from '../components/TopDoctorCard'
import { useParams } from 'react-router-dom'

const Doctors = () => {
  const {speciality} = useParams()
  const [filterDoctor,setFilterDoctor] = useState(doctors)

  
  function applyFilter(){
    speciality &&
      setFilterDoctor(doctors.filter(doctor=>doctor.speciality ==speciality))
    
  }
  useEffect(()=>{
    applyFilter()
  },[])

  function handleClick(e){
    setFilterDoctor( doctors.filter(doctor=>doctor.speciality === e.target.innerHTML ))
  }
  
  return (
    <div className='mb-36'>
      <p className='my-5 text-gray-700'>Browse through the doctors specialist</p>
      <div className='flex flex-col md:flex-row gap-5 '>
      <div className=' md:w-1/5 text-center md:text-start'>
        <p onClick={()=>setFilterDoctor(doctors)} className={`border px-4 py-2 rounded-md my-1 hover:bg-blue-100`}>All</p>
        <p onClick={handleClick} className='border px-4 py-2 rounded-md my-1 hover:bg-blue-100'>General physician</p>
        <p onClick={handleClick} className='border px-4 py-2 rounded-md my-1 hover:bg-blue-100'>Gynecologist</p>
        <p onClick={handleClick} className='border px-4 py-2 rounded-md my-1 hover:bg-blue-100'>Dermatologist</p>
        <p onClick={handleClick} className='border px-4 py-2 rounded-md my-1 hover:bg-blue-100'>Pediatricians</p>
        <p onClick={handleClick} className='border px-4 py-2 rounded-md my-1 hover:bg-blue-100'>Neurologist</p>
        <p onClick={handleClick} className='border px-4 py-2 rounded-md my-1 hover:bg-blue-100'>Gastroenterologist</p>
      </div>
      <div className='flex gap-5 flex-wrap justify-evenly md:mx-16'>
        {
          filterDoctor.map(doctor=> 
          <TopDoctorCard
            key={doctor._id}
            image={doctor.image}
            speciality={doctor.speciality}
            name={doctor.name}
            id={doctor._id}
          />)
        }
      </div>
      </div>
    </div>
  )
}

export default Doctors
