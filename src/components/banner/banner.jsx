import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='pt-40 bg-oasisbg w-full bg-cover bg-top aspect-auto lg:aspect-[20/9]'>
        <div className='w-11/12 2xl:w-10/12 mx-auto text-white flex flex-col gap-y-4 py-14 xl:py-0 justify-center h-full'>
          <h1 className='text-3xl xl:text-5xl font-bold'>TOP-TIER CONDENSER COIL MANUFACTURER<br className='hidden md:block'/> BASED IN THE UAE.</h1>
          <p className='text-sm md:text-base xl:text-lg font-normal text-gray-200'>OUR TEAM, DEEPLY PASSIONATE AND TECHNICALLY ADEPT, IS COMMITTED<br className='hidden md:block'/> TO DELIVERING UNPARALLELED HEAT REJECTION SOLUTIONS IN THE UAE.</p>
          <Link to={'/products'} className='bg-primary hover:bg-white hover:text-primary duration-150 uppercase text-base font-medium mt-3 px-10 w-fit py-3 rounded-xl'>our products</Link>
        </div>
    </div>
  )
}

export default Banner