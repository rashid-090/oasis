import React from 'react';
import {logowht} from '../../assets'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='w-full text-white bg-gradient-to-r from-[#119A7B] via-[#045B55] to-[#063142] pt-14'>
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-10 gap-x-20'>
            <div className='space-y-3'>
              <img className='w-36 h-16 object-cover' src={logowht} alt="logo" />
              <p className='text-sm font-light text-gray-200'>Oasis Group: Your Premier
                  Destination for Unmatched
                  Transportation Excellence.
                  Elevate Your Journeys with
                  Our Commitment to Quality
                  and Unparalleled Customer
                  Service.</p>
            </div>
            <div className='space-y-3'>
              <h4 className='font-semibold text-lg'>SITEMAP</h4>
              <ul className='capitalize space-y-1'>
                <li className='font-light text-gray-200 hover:font-normal hover:text-white duration-300'><Link>home</Link></li>
                <li className='font-light text-gray-200 hover:font-normal hover:text-white duration-300'><Link>about us</Link></li>
                <li className='font-light text-gray-200 hover:font-normal hover:text-white duration-300'><Link>rent a service</Link></li>
                <li className='font-light text-gray-200 hover:font-normal hover:text-white duration-300'><Link>all services</Link></li>
                <li className='font-light text-gray-200 hover:font-normal hover:text-white duration-300'><Link>cars</Link></li>
                <li className='font-light text-gray-200 hover:font-normal hover:text-white duration-300'><Link>testimonials</Link></li>
              </ul>
            </div>
            <div className='space-y-3'>
            <h4 className='font-semibold text-lg'>SUPPORT</h4>
              <ul className='capitalize space-y-1'>
                <li className='font-light text-gray-200 hover:font-normal hover:text-white duration-150'><Link>live support</Link></li>
                <li className='font-light text-gray-200 hover:font-normal hover:text-white duration-150'><Link>FAQ</Link></li>
                <li className='font-light text-gray-200 hover:font-normal hover:text-white duration-150'><Link>privacy policy</Link></li>
                <li className='font-light text-gray-200 hover:font-normal hover:text-white duration-150'><Link>help</Link></li>
              </ul>
            </div>
            <div className='space-y-3'>
              <h4 className='font-semibold text-lg capitalize'>CONTACT</h4>
              <span className='flex flex-col space-y-2'>
                <p className='font-light text-gray-200  hover:text-white duration-150'><span className='font-semibold '>Address: </span>Lorem ipsum dolor sit amet, dolor sit amet.</p>
                <a className='font-light text-gray-200  hover:text-white duration-150 cursor-pointer'><span className='font-semibold '>Phone: </span>123 456 789</a>
                <a className='font-light text-gray-200  hover:text-white duration-150 cursor-pointer'><span className='font-semibold '>Email: </span>info@oasis.com</a>
              </span>
            </div>
        </div>
        <div className='h-[.2px] w-full mt-10 bg-gray-400' />
        <div className='py-3 space-y-1 w-11/12 mx-auto flex flex-col font-light text-center text-xs md:text-sm justify-center md:flex-row items-center md:justify-between'>
          <p>&#169; 2024 All Rights Reserved by Oasis Group of Companies</p>
          <p>Terms & Conditions</p>
        </div>
    </footer>
  )
}

export default Footer