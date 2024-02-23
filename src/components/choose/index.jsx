import React from 'react';
import { LiaRocketSolid,LiaToolsSolid  } from "react-icons/lia";
import { RiCustomerService2Line } from "react-icons/ri";
import {rocket,maintance,custmser} from '../../assets'

const WhyChooseus = () => {
  return (
    <section className='w-full bg-white py-10 lg:py-20'>
        <div className='w-11/12  xl:w-10/12 mx-auto text-center'>
            <h1 className='text-2xl lg:text-5xl font-bold text-primary'>Why Choose Oasis?</h1>
            <div className='grid grid-cols-1  xl:grid-cols-3 gap-10 pt-10'>
                <div className='flex flex-col px-5 py-14 items-center gap-5 text-primary rounded-3xl shadow-4xl'>
                    <img src={rocket} className='h-16 lg:h-20 w-16 lg:w-20 object-cover' alt="" />
                    <h4 className='text-xl lg:text-2xl font-medium w-full lg:w-[80%]'>Fast & Easy Booking</h4>
                    <p className='text-sm'>Seamless reservations, swift journeys.
                      Book with us for a hassle-free and quick
                      experience.</p>
                </div>
                <div className='flex flex-col px-5 py-14 items-center gap-5 text-primary rounded-3xl shadow-4xl'>
                <img src={custmser} className='h-16 lg:h-20 w-16 lg:w-20 object-cover' alt="" />
                    <h4 className='text-xl lg:text-2xl font-medium w-full lg:w-[80%]'>Unmatched Customer Service</h4>
                    <p className='text-sm'>We ensure a seamless experience with
                      immediate replacements for breakdowns
                      and personalized GPS tracking, going
                      beyond to satisfy every client.</p>
                </div>
                <div className='flex flex-col px-5 py-14 items-center gap-5 text-primary rounded-3xl shadow-4xl'>
                <img src={maintance} className='h-16 lg:h-20 w-16 lg:w-20 object-cover' alt="" />
                    <h4 className='text-xl lg:text-2xl font-medium w-full lg:w-[80%]'>Comprehensive Maintenance Services</h4>
                    <p className='text-sm'>Trust Oasis Group for efficient, cost-
                      effective automotive maintenance,
                      ensuring your fleet remains in optimal
                      condition.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseus