import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {logo,footlogo,logowht,iconenvp,iconphn,iconphnwht,iconenvpwht} from '../../assets';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";


const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const currentPathname = location.pathname;
  open
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");
  const toggleMenu = () => {
    setOpen(!open);
  };

  const menuItems = [
    { path: '/', label: 'home' },
    { path: '/about-us', label: 'about us' },
    { path: '/products', label: 'our products' },
    { path: '/careers', label: 'careers' },
    { path: '/contact-us', label: 'contact us' },
    { path: '/blog/A-Journey-of-Excellence:Oasis-Cool-&-Coils-LLC', label: 'blog' },
  ];
  return (
   <nav className={`${location.pathname === '/' ? 'absolute top-0 left-0 right-0' : 'relative'}`}>
      <div className={`${location.pathname === '/' ? 'bg-gradient-to-r from-[#0d4c98a9] to-[#109790b5]' : ''} flex  gap-y-5 justify-between items-center px-5 md:px-10  py-2 border-b-2 ${location.pathname === '/' ? 'border-[#ffffff4d]' : 'border-[#025ab295]'} `}>
        <Link to={'/'}><img className='h-14 w-32 md:h-14 md:w-24  xl:h-20 xl:w-40 object-contain' src={location.pathname === '/' ? footlogo : logo} alt="logo" /></Link>
        <div className='hidden md:flex flex-col md:flex-row gap-y-5 gap-x-5 xl:gap-x-10'>
          <div className='flex gap-5  group md:border-r-2 border-gray-300 md:pr-5 xl:pr-9'>
              <img loading='lazy' className=' h-8 w-8 xl:h-10 xl:w-10 object-contain' src={location.pathname === '/' ? iconphnwht : iconphn} alt="icon" />
              <div>
                <p className={`text-sm xl:text-lg font-semibold ${location.pathname === '/' ? 'text-white' : 'text-primary'}`}>CALL US FOR 24/7 SUPPORT</p>
                <a href='tel:+97167313579' target='_blank' className={`group-hover:underline duration-150 text-sm xl:text-base ${location.pathname === '/' ? 'text-white hover:text-white' : 'text-secondary hover:text-primary'} text-secondary hover:text-primary xl:tracking-wider`}>+97167313579</a>
              </div>
          </div>
          <div className='flex gap-5  group'>
            <img loading='lazy' className=' h-8 w-8 xl:h-10 xl:w-10 object-contain' src={location.pathname === '/' ? iconenvpwht : iconenvp} alt="icon" />
            <div>
                <p className={`text-sm xl:text-lg font-semibold  ${location.pathname === '/' ? 'text-white' : 'text-primary'}`}>EMAIL US</p>
                <a href='mailto:sales@oasisaccoils.com' target='_blank' className={`group-hover:underline duration-150 text-sm xl:text-base ${location.pathname === '/' ? 'text-white hover:text-white' : 'text-secondary hover:text-primary'}`}>sales@oasisaccoils.com</a>
              </div>
          </div>
        </div>
        {/* mobile */}
        <div className='flex gap-5 items-center md:hidden text-white'>
            <a href='tel:+97167313579' target='_blank' className={`${location.pathname === '/' ? 'bg-white text-primary' : 'bg-primary text-white' } h-10 w-10 grid place-items-center rounded-full`}><FiPhoneCall className='text-2xl'/></a>
            <a href='mailto:sales@oasisaccoils.com' target='_blank' className={`${location.pathname === '/' ? 'bg-white text-primary' : 'bg-primary text-white' } h-10 w-10 grid place-items-center rounded-full`}><TfiEmail className='text-2xl'/></a>
        </div>
      </div>
      {/* menu */}
      <div className='px-5 md:px-10 flex h-16 lg:h-20  items-center justify-between'>
         <ul className='hidden xl:flex gap-5  items-center '>
          {menuItems?.map((item,i)=>(
            <li key={i} className={`${location.pathname === '/' ? 'text-white  underline-hover-home' : 'text-gray-600 underline-hover-effect'} capitalize ${currentPathname === item.path ? 'bg-primary text-white ' : ' '}  text-lg 2xl:text-xl font-medium px-3 py-0.5 rounded-[4px] `}>
              <Link to={item.path} className='uppercase'>{item.label}</Link>
            </li>
          ))}
         </ul>
         <Link to="/contact-us" className={`flex items-center gap-3 ${location.pathname === '/' ? 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary duration-150' : 'bg-primary hover:bg-hovclr text-white' }  px-5 py-2  lg:px-10 lg:py-3 rounded-3xl font-semibold`}><p>Get a Quote</p><IoIosArrowDroprightCircle className='text-2xl'/></Link>
         <GiHamburgerMenu onClick={toggleMenu} className={`block xl:hidden text-3xl ${location.pathname === '/' ? 'text-white' : 'text-primary'}`}/>
      </div>
      <div className={`${open ? "scale-100 bg-white text-primary h-screen overflow-y-scroll" : "scale-0 bg-white"} transform transition-transform duration-200 ease-linear fixed  left-0 right-0 bottom-0 top-0 z-[999999]`}>
      <Link to={'/'}><img onClick={()=> setOpen(false)} className=' h-14 w-32 object-contain absolute top-5 left-5' src={logo} alt="logo" /></Link>
          <button onClick={toggleMenu}>
            <MdOutlineClose  className='text-primary text-4xl absolute top-5 right-5'/>
          </button>
          <ul className='flex items-center flex-col gap-y-5 justify-between h-full text-2xl'>
            <div className='flex items-center h-full justify-center flex-col gap-y-5'>
              {menuItems.map((menuItem) => (
                <li key={menuItem.path} className={`capitalize ${currentPathname === menuItem.path ? 'bg-primary text-white ' : 'bg-white text-secondary '} font-medium px-10 py-0.5 rounded-[4px]`}>
                  <Link onClick={()=> setOpen(false)} to={menuItem.path}>{menuItem.label}</Link>
                </li>
              ))}
            </div>
          <div className='w-full flex flex-col md:flex-row justify-center md:justify-between bg-primary text-white items-start md:items-center py-3 px-8 gap-y-3 pt-3  h-32'>

                  <a href="tel:+67 31 35 79" target='_blank' className='flex gap-5 items-center'><FiPhoneCall className='text-4xl'/><p className='text-lg font-medium underline'>+67 31 35 79</p></a>
                  <a href="mailto:sales@oasisaccoils.com" target='_blank' className='flex gap-5 items-center'><TfiEmail className='text-4xl'/><p className='text-lg font-medium underline'>sales@oasisaccoils.com</p></a>

          </div>
          </ul>
          {/* socail */}
        </div>
   </nav>
  )
}

export default Header;




