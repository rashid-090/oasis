import React from 'react';
import { Link } from 'react-router-dom';
import {logowht,footlogo} from '../../assets'
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { PiPhoneCallLight } from "react-icons/pi";
import { FaCircleArrowRight } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className='w-full text-white bg-gradient-to-r from-[#104c8b] via-[#135f7c] to-[#116f47]'>
       <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-20 xl:grid-cols-4 py-10'>
          <div className='space-y-5'>
            <Link to='/'><img className='w-40 h-16 md:w-44 md:h-20 object-contain' src={footlogo} alt="oasis" /></Link>
            <p className='text-sm'>At Oasis Group, we prioritize
              customer satisfaction, delivering
              efficient, cost-effective services
              with unwavering quality standards.
              Our dedicated team ensures
              client needs are met.</p>
              <span className='flex gap-3 text-4xl'><a href="#" target='_blank'><FaFacebook className='hover:-translate-y-1 duration-150'/></a><a href="https://www.instagram.com/oasis.accoils?igsh=MXg0bzlyMHNha2JwZg==" target='_blank'><BsInstagram className='hover:-translate-y-1 duration-150'/></a></span>
          </div>
          <div>
            <h3 className='text-lg md:text-2xl uppercase font-bold pb-5 xl:pb-10'>contact us</h3>
            <div className='space-y-5'>
              <div className='space-y-2 text-base '>
                  <span className='flex items-center gap-3 group'><PiPhoneCallLight className='text-3xl'/><a href="tel:+97167313579" className='group-hover:underline'>+97167313579</a></span>
                  <span className='flex items-center gap-3 group'><TfiEmail className='text-2xl'/><a href="#" className='group-hover:underline'>sales@oasisaccoils.com</a></span>
              </div>
              <div className='text-base 2xl:pl-9 space-y-4'>
                  <div>
                    <p className='font-semibold'>Head Office</p>
                    <p>Dubai, Sharjah</p>
                  </div>
                  <div>
                    <p className='font-semibold'>Factory</p>
                    <p>Ajman</p>
                  </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className='text-lg md:text-2xl uppercase font-bold pb-5 xl:pb-10'>QUICK LINKS</h3>
            <ul className='text-base 2xl:text-lg font-normal uppercase space-y-2'>
              <li className='underline-hover-effect2 w-fit'><Link to='/about-us'>about us</Link></li>
              <li className='underline-hover-effect2 w-fit'><Link to='/products'>our products</Link></li>
              <li className='underline-hover-effect2 w-fit'><Link to='/careers'>careers</Link></li>
              <li className='underline-hover-effect2 w-fit'><Link to='/contact-us'>get in touch</Link></li>
              <li className='underline-hover-effect2 w-fit'><Link to='/blog/A-Journey-of-Excellence:Oasis-Cool-&-Coils-LLC'>Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg md:text-2xl uppercase font-bold pb-5 xl:pb-10'>NEWSLETTER</h3>
            <div className='space-y-5'>
              <p className='text-base'>Subscribe to our Newsletter & Event right now to be updated.</p>
              <form className='relative'>
                <input className='w-full bg-white rounded-xl p-3 pr-14  outline-none text-black font-light placeholder:text-[#2e9970]' type="text" placeholder='Enter Your Email Here'/>
                <button type='submit'><FaCircleArrowRight className='cursor-pointer absolute top-2 right-3 text-3xl text-primary'/></button>
              </form>
            </div>
          </div>
       </div>
       <div className='border-t border-gray-400 text-xs'>
         <div className='w-11/12 mx-auto flex flex-col items-center md:flex-row justify-between py-3 2xl:py-4'>
            <p>All Rights Reserved by Oasis Cool & Heat Coils LLC</p>
            <a className='hover:underline' target='_blank' href="https://dostudio.co.in">Powered by Do Studio</a>
         </div>
       </div>
    </footer>
  )
}

export default Footer