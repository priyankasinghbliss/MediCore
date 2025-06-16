import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className='bg-tertiary pt-10 pb-5 w-full'>
      <div className='container mx-auto px-10 sm:px-15 md:px-20 lg:px-35'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* ------Left Section------ */}
          <div className='sm:col-span-2 lg:col-span-2'>
            <img className='w-54 mb-5' src={assets.dark_logo} alt='logo' />
            <p className='text-gray-600 leading-relaxed'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* ------Center Section------ */}
          <div>
            <p className='text-xl font-semibold mb-5 text-gray-800'>COMPANY</p>
            <ul className='flex flex-col gap-3 text-gray-600'>
              <li className='hover:text-primary transition duration-300'>
                <a href='/'>Home</a>
              </li>
              <li className='hover:text-primary transition duration-300'>
                <a href='/about'>About us</a>
              </li>
              <li className='hover:text-primary transition duration-300'>
                <a href='/delivery'>Delivery</a>
              </li>
              <li className='hover:text-primary transition duration-300'>
                <a href='/privacy-policy'>Privacy policy</a>
              </li>
            </ul>
          </div>

          {/* ------Right Section------ */}
          <div>
            <p className='text-xl font-semibold mb-5 text-gray-800'>
              GET IN TOUCH
            </p>
            <ul className='flex flex-col gap-3 text-gray-600'>
              <li className='hover:text-primary transition duration-300'>
                <a href='tel:+0-000-000-000'>+0-000-000-000</a>
              </li>
              <li className='hover:text-primary transition duration-300'>
                <a href='mailto:careconnect@gmail.com'>careconnect@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* ------Copyright Text------ */}
        <div className='mt-10 border-t border-gray-900 pt-6'>
          <p className='text-sm text-center text-gray-600'>
            &copy; 2025 Care Connect. All rights reserved | Designed by{" "}
            <span className='text-primary font-medium'>Care Connect</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
