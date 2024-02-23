import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {logo} from '../../assets';
import { BiSearchAlt } from "react-icons/bi";
import { LiaPhoneVolumeSolid } from "react-icons/lia";


const Header = () => {
  const location = useLocation();
  const currentPathname = location.pathname;

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About us' },
    { path: '/services', label: 'Services' },
    { path: '/quick-rent', label: 'Quick rent' },
  ];
  return (
    <nav className='z-30 absolute text-white top-0 left-0 right-0 w-full bg-transparent flex  justify-between items-center h-20 lg:h-24 px-5 xl:px-20'>
        {/* logo */}
        <img className='h-10 lg:h-14 object-cover' src={logo} alt="logo" />
        {/* menu */}
        <ul className='hidden xl:flex items-center 2xl:mr-40 text-primary gap-5 text-lg transition-all duration-150'>
          {menuItems.map((menuItem) => (
            <li key={menuItem.path} className={`capitalize ${currentPathname === menuItem.path ? 'font-semibold ' : 'font-normal '}`}>
              <Link to={menuItem.path}>{menuItem.label}</Link>
            </li>
          ))}
        </ul>
        {/* search */}
        <form className='hidden xl:block relative'>
          <input className='bg-transparent outline-none caret-white text-sm p-3 pl-8 px-4  h-9 border rounded-3xl' type="search" placeholder=''  />
          <BiSearchAlt className='absolute top-2 left-2 text-xl'/>
        </form>
        {/* call to action */}
        <div className='flex gap-2 items-center text-black md:text-white'>
          <div className='flex flex-col text-right'>
            <p className='text-xs lg:text-sm font-light'>Get Support</p>
            <a className='text-sm lg:text-xl font-semibold' href="#">+123-456-7891</a>
          </div>
          <LiaPhoneVolumeSolid className='rotate-[270deg] text-3xl lg:text-4xl'/>
        </div>
    </nav>
  )
}

export default Header