import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {logo,iconenvp,iconphn} from '../../assets';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";



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
    { path: '/services', label: 'our services' },
    { path: '/careers', label: 'careers' },
    { path: '/contact-us', label: 'contact us' },
    { path: '/blog', label: 'blog' },
  ];
  return (
   <nav className=''>
      <div className='flex flex-col md:flex-row gap-y-5 justify-between items-center px-5 md:px-10 py-5 border-b-2 border-primary'>
        <Link to={'/'}><img className='h-24 w-52 md:h-16 md:w-28  xl:h-28 xl:w-60 object-contain' src={logo} alt="logo" /></Link>
        <div className='flex flex-col md:flex-row gap-y-5 gap-x-5 xl:gap-x-10'>
          <div className='flex gap-5  group md:border-r-2 border-gray-300 md:pr-5 xl:pr-9'>
              <img loading='lazy' className=' h-10 w-10 object-contain' src={iconphn} alt="icon" />
              <div>
                <p className='text-sm xl:text-base font-semibold text-primary'>CALL US FOR 24/7 SUPPORT</p>
                <a href='#' className='group-hover:underline duration-150 text-sm text-secondary hover:text-primary'>+67 31 35 79</a>
              </div>
          </div>
          <div className='flex gap-5  group'>
            <img loading='lazy' className=' h-10 w-10 object-contain' src={iconenvp} alt="icon" />
            <div>
                <p className='text-sm xl:text-base font-semibold text-primary'>EMAIL US</p>
                <a href='#' className='group-hover:underline duration-150 text-sm text-secondary hover:text-primary'>sales@oasisaccoils.com</a>
              </div>
          </div>
        </div>
      </div>
      {/* menu */}
      <div className='px-5 md:px-10 flex h-16 lg:h-20  items-center justify-between'>
         <ul className='hidden xl:flex gap-5  items-center '>
          {menuItems?.map((item,i)=>(
            <li key={i} className={`capitalize ${currentPathname === item.path ? 'bg-primary text-white ' : 'bg-white text-secondary underline-hover-effect'} text-lg 2xl:text-xl font-medium px-3 py-0.5 rounded-[4px] `}>
              <Link to={item.path} className='uppercase'>{item.label}</Link>
            </li>
          ))}
         </ul>
         <Link to="/" className='flex items-center gap-3 bg-primary hover:bg-hovclr text-white px-5 py-2  lg:px-10 lg:py-3 rounded-3xl font-semibold'><p>Get a Quote</p><IoIosArrowDroprightCircle className='text-2xl'/></Link>
         <GiHamburgerMenu onClick={toggleMenu} className='block xl:hidden text-3xl text-primary'/>
      </div>
      <div className={`${open ? "scale-100 bg-white text-primary h-screen" : "scale-0 bg-white"} transform transition-transform duration-200 ease-linear fixed  left-0 right-0 bottom-0 top-0 z-[999999]`}>
      <Link to={'/'}><img className='h-16 w-32 object-contain absolute top-5 left-5' src={logo} alt="logo" /></Link>
          <button onClick={toggleMenu}>
            <MdOutlineClose  className='text-primary text-4xl absolute top-5 right-5'/>
          </button>
          <ul className='flex items-center flex-col gap-y-5 justify-center h-full text-2xl'>
          {menuItems.map((menuItem) => (
            <li key={menuItem.path} className={`capitalize ${currentPathname === menuItem.path ? 'bg-primary text-white ' : 'bg-white text-secondary '} font-medium px-10 py-0.5 rounded-[4px]`}>
              <Link onClick={()=> setOpen(false)} to={menuItem.path}>{menuItem.label}</Link>
            </li>
          ))}
          </ul>
        </div>
   </nav>
  )
}

export default Header;




{/* 

<li key={menuItem.path} className={`capitalize ${currentPathname === menuItem.path ? 'font-semibold ' : 'font-normal '}`}>
              <Link to={menuItem.path}>{menuItem.label}</Link>
            </li>


<button className='block xl:hidden' onClick={toggleMenu}>
            <CgMenuRight  className='text-primary md:text-white text-3xl'/>
          </button>
          
<div className={`${open ? "scale-100 bg-primary text-white h-screen" : "scale-0"} transform transition-transform duration-200 ease-in absolute  left-0 right-0 bottom-0 top-0`}>
<button onClick={toggleMenu}>
  <VscClose  className='text-white text-4xl absolute top-5 right-5'/>
</button>
<ul className='flex items-center flex-col gap-y-5 justify-center h-full text-2xl'>
{menuItems.map((menuItem) => (
  <li key={menuItem.path} className={`capitalize ${currentPathname === menuItem.path ? 'font-semibold underline' : 'font-normal '}`}>
    <Link onClick={()=> setOpen(false)} to={menuItem.path}>{menuItem.label}</Link>
  </li>
))}
</ul>
</div> */}