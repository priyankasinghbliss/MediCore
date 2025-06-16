import React from "react";
import { assets } from "../assets/assets";
import CustomShapeDivider from "./CustomShapeDivider";

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-slate-100 px-10 md:px-25 lg:pl-35 h-auto sm:h-[65vh] md:h-[65vh] lg:h-[85vh] relative w-full'>
      {/* -----Left Side----- */}
      <div className='md:w-full lg:w-1/2 flex flex-col items-start justify-center gap-4 py-25 md:py-35 md:mb-0 z-10 lg:h-full'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className='flex flex-col md:flex-row items-start gap-3 text-white text-sm font-light'>
          <img
            className='w-28'
            src={assets.group_profiles}
            alt='Group profiles'
          />
          <p className='text-left'>
            Simply browse through our extensive list of trusted doctors,
            <br className='hidden sm:block' /> schedule your appointment
            hassle-free.
          </p>
        </div>
        <a
          className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'
          href='#speciality'
        >
          Book appointment{" "}
          <img className='w-3' src={assets.arrow_icon} alt='Right arrow icon' />
        </a>
      </div>

      {/* -----Right Side----- */}
      <div className='md:w-full lg:w-1/2 flex items-end justify-center relative pt-15 lg:h-full'>
        <img
          className='w-[100%] sm:w-[60%] md:w-full h-auto absolute bottom-0 rounded-lg'
          src={assets.header_img}
          alt='Header image'
        />
      </div>

      {/* -----Overlay----- */}
      <div className='bg-gradient-to-r from-secondary to-transparent w-full h-full absolute top-0 left-0 z-0'></div>

      {/* -----Custom Shape Divider----- */}
      <CustomShapeDivider className='absolute bottom-0 w-full' />
    </div>
  );
};

export default Header;
