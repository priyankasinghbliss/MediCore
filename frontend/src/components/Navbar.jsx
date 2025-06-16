import React, { useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef(null);

  // Add scroll event listener
  useEffect(() => {
    // Close profile menu when clicking outside
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <div className='w-full flex items-center justify-between text-sm py-4 mb-5 bg-secondary shadow-md text-white px-5 sm:px-10 md:px-20 lg:px-45 fixed top-0 left-0 z-50'>
      <img
        onClick={() => navigate("/", scrollTo(0, 0))}
        className='w-38 sm:w-40 md:w-60 cursor-pointer'
        src={assets.logo}
        alt='logo'
      />

      {/* Desktop Menu */}
      <ul className={`hidden md:flex items-start gap-5 font-medium`}>
        <NavLink to={"/"} onClick={() => window.scrollTo(0, 0)}>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to={"/doctors"}>
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to={"/about"}>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to={"/contact"}>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      {/* Profile or Login Button */}
      <div className='flex items-center gap-4'>
        {token ? (
          <div
            ref={profileRef}
            className='flex items-center gap-2 cursor-pointer group relative'
            onClick={toggleProfileMenu}
          >
            <img
              className='w-8 h-8 rounded-full'
              src={assets.profile_pic}
              alt='profile'
            />
            <img
              className='w-2.5'
              src={assets.dropdown_icon}
              alt='dropdown icon'
            />
            <div
              className={`absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 ${
                showProfileMenu ? "block" : "hidden md:group-hover:block"
              }`}
            >
              <div className='min-w-48 bg-slate-100 rounded flex flex-col gap-4 p-4'>
                <p
                  onClick={() => {
                    navigate("my-profile");
                    setShowProfileMenu(false);
                  }}
                  className='hover:text-primary cursor-pointer'
                >
                  My Profile
                </p>
                <p
                  onClick={() => {
                    navigate("my-appointments");
                    setShowProfileMenu(false);
                  }}
                  className='hover:text-primary cursor-pointer'
                >
                  My Appointments
                </p>
                <p
                  onClick={() => {
                    setToken(false);
                    setShowProfileMenu(false);
                  }}
                  className='hover:text-primary cursor-pointer'
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'
          >
            Create account
          </button>
        )}

        {/* Hamburger Menu for Mobile */}
        <img
          className='w-7 md:hidden cursor-pointer transition-all duration-500'
          onClick={() => setShowMenu(true)}
          src={assets.menu_icon}
          alt='Humburger menu'
        />

        {/* Mobile Menu Component */}
        <MobileMenu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          token={token}
          navigate={navigate}
        />
      </div>
    </div>
  );
};

export default Navbar;
