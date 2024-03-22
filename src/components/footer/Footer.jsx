import React from 'react';
import { Link } from 'react-router-dom';
import {logowht} from '../../assets'
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { PiPhoneCallLight } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className='w-full text-white bg-gradient-to-r from-[#104c8b] via-[#135f7c] to-[#116f47]'>
       <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-20 xl:grid-cols-4 py-10'>
          <div className='space-y-5'>
            <img className='w-40 h-16 md:w-60 md:h-28 object-contain' src={logowht} alt="oasis" />
            <p>At Oasis Group, we prioritize
              customer satisfaction, delivering
              efficient, cost-effective services
              with unwavering quality standards.
              Our dedicated team ensures
              client needs are met.</p>
              <span className='flex gap-3 text-4xl'><FaFacebook className='hover:-translate-y-1 duration-150'/><BsInstagram className='hover:-translate-y-1 duration-150'/></span>
          </div>
          <div>
            <h3 className='text-lg md:text-2xl uppercase font-bold pb-5 xl:pb-10'>contact us</h3>
            <div className='space-y-8'>
              <div className='space-y-2 text-base 2xl:text-lg'>
                  <span className='flex items-center gap-3 group'><PiPhoneCallLight className='text-3xl'/><a href="#" className='group-hover:underline'>+67313579</a></span>
                  <span className='flex items-center gap-3 group'><TfiEmail className='text-2xl'/><a href="#" className='group-hover:underline'>sales@oasisaccoils.com</a></span>
              </div>
              <div className='text-base 2xl:pl-9 space-y-4'>
                  <div>
                    <p className='font-semibold'>Head Office</p>
                    <p>Dubai, Sharjah</p>
                  </div>
                  <div>
                    <p className='font-semibold'>Warehouse</p>
                    <p>Ajman</p>
                  </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className='text-lg md:text-2xl uppercase font-bold pb-5 xl:pb-10'>QUICK LINKS</h3>
            <ul className='text-base 2xl:text-xl font-light uppercase space-y-3'>
              <li className='underline-hover-effect2 w-fit'><Link to='/'>about us</Link></li>
              <li className='underline-hover-effect2 w-fit'><Link to='/'>our services</Link></li>
              <li className='underline-hover-effect2 w-fit'><Link to='/'>careers</Link></li>
              <li className='underline-hover-effect2 w-fit'><Link to='/'>get in touch</Link></li>
              <li className='underline-hover-effect2 w-fit'><Link to='/'>privacy policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg md:text-2xl uppercase font-bold pb-5 xl:pb-10'>NEWSLETTER</h3>
            <div className='space-y-5'>
              <p className='text-base 2xl:text-lg'>Subscribe to our Newsletter & Event right now to be updated.</p>
              <div>
                <input className='w-full bg-white rounded-xl p-3 xl:p-5 outline-none text-black font-light placeholder:text-[#2e9970]' type="text" placeholder='Enter Your Email Here'/>
              </div>
            </div>
          </div>
       </div>
       <div className='border-t-2 text-xs xl:text-sm'>
         <div className='w-11/12 mx-auto flex flex-col items-center md:flex-row justify-between py-3 xl:py-5'>
            <p>All Rights Reserved by Oasis Cool & Heat Coils LLC</p>
            <a className='hover:underline' target='_blank' href="https://dostudio.co.in">Powered by Do Studio</a>
         </div>
       </div>
    </footer>
  )
}

export default Footer