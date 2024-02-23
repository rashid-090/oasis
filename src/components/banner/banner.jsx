import React from 'react';
import {jeep} from '../../assets'

const Banner = () => {
  return (
    <div className='xl:min-h-screen overflow-hidden grid grid-cols-1 md:grid-cols-5 '>
        <div className='flex flex-col gap-2 lg:gap-4 justify-center p-5  lg:pl-32 pt-32 md:pt-28 lg:pt-40 md:col-span-3 bg-[#FDFDFD]'>
            <h1 className='text-4xl md:text-2xl lg:text-6xl font-bold w-full md:w-[70%] text-primary'>Experience Luxury on the Move</h1>
            <p className='text-base lg:text-lg font-medium text-secondary'>Elevate Your Travel Experience with Oasis<br/>
                Group of Companies.<br/>
                Rent a Masterpiece, Drive Perfection.</p>
            <button className='bg-third hover:bg-primary w-fit text-white px-7 py-2 lg:px-10 lg:py-3 rounded-full text-base lg:text-xl'>Book a car</button>
        </div>
        <div className='flex flex-col  relative justify-center p-5 lg:pr-10 pt-10 md:pt-28 lg:pt-40 md:col-span-2 bg-gradient-to-r from-[#119A7B] via-[#045B55] to-[#063142]'>
            <img className='md:absolute md:-left-20 xl:-left-44 h-52 lg:h-full lg:w-full  object-contain' src={jeep} alt="jeep" loading='lazy'/>
        </div>
    </div>
  )
}

export default Banner