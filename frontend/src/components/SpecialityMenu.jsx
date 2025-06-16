import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      className='flex flex-col items-center gap-4 py-10 pt-25 text-gray-700 mt-[-35px] md:mt-[-75px]'
      id='speciality'
    >
      <h1 className='text-2xl sm:text-3xl font-medium'>Find by Speciality</h1>
      <p className='w-full sm:w-1/2 text-center text-sm px-5 sm:px-0'>
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className='flex justify-start sm:justify-center gap-4 pt-5 w-full overflow-x-scroll px-4'>
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <img
              className='w-18 sm:w-20 md:w-25 mb-2 h-auto'
              src={item.image}
              alt={item.speciality}
            />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
