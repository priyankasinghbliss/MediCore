import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const MobileMenu = ({ showMenu, setShowMenu, token, navigate }) => {
  return (
    <div
      className={`${
        showMenu ? "fixed w-full" : "h-0 w-0"
      } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-secondary transition-all`}
    >
      <div className='flex items-center justify-between px-5 py-6'>
        <img className='w-36' src={assets.logo} alt='Logo' />
        <img
          className='w-8 transition-all duration-700'
          onClick={() => setShowMenu(false)}
          src={assets.cross_icon}
          alt='Cross-icon'
        />
      </div>
      <ul className='flex flex-col items-center gap-2 mt-5 text-lg font-medium'>
        <NavLink onClick={() => setShowMenu(false)} to={"/"}>
          <p className='px-4 py-1 rounded inline-block'>HOME</p>
        </NavLink>
        <NavLink onClick={() => setShowMenu(false)} to={"/doctors"}>
          <p className='px-4 py-1 rounded inline-block'>ALL DOCTORS</p>
        </NavLink>
        <NavLink onClick={() => setShowMenu(false)} to={"/about"}>
          <p className='px-4 py-1 rounded inline-block'>ABOUT</p>
        </NavLink>
        <NavLink onClick={() => setShowMenu(false)} to={"/contact"}>
          <p className='px-4 py-1 rounded inline-block'>CONTACT</p>
        </NavLink>
        {!token && (
          <button
            onClick={() => {
              setShowMenu(false);
              navigate("/login");
            }}
            className='bg-primary text-white px-8 py-3 rounded-full font-light block'
          >
            Create account
          </button>
        )}
      </ul>
    </div>
  );
};

export default MobileMenu;
