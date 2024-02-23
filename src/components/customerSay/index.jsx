import React from 'react';
import { MdOutlineStarPurple500 } from "react-icons/md";
import {user1,user2} from '../../assets'

const CustomerSay = () => {
  return (
    <section className='py-10 lg:py-20'>
        <div className='w-11/12 md:w-10/12 mx-auto grid grid-cols-1 gap-10 xl:grid-cols-5'>
            <div className='md:col-span-2 text-center xl:text-left mx-auto text-2xl lg:text-5xl xl:text-6xl font-bold text-primary flex items-center'><h1>What<br className='hidden xl:block'/> Customers<br className='hidden xl:block'/> Are Saying...</h1></div>
            <div className='md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='flex flex-col gap-2 p-5 shadow-4xl'>
                    <span className='flex gap-1 text-yellow-400'>
                        <MdOutlineStarPurple500 className='text-3xl'/>
                        <MdOutlineStarPurple500 className='text-3xl'/>
                        <MdOutlineStarPurple500 className='text-3xl'/>
                        <MdOutlineStarPurple500 className='text-3xl'/>
                        <MdOutlineStarPurple500 className='text-3xl'/>
                    </span>
                    <p className=' text-base text-gray-500'>Lorem Ipsum is simply dummy
                        text of the printing and
                        typesetting industry. Lorem
                        Ipsum has been the industry's
                        standard dummy text ever
                        since the 1500s,
                        when an unknown printer took
                        a galley of type and scrambled
                        it to make a type specimen</p>
                    <div className='flex gap-2 items-center text-primary'>
                        <img className='h-14 w-14 object-cover rounded-full' src={user1} alt="user" />
                        <span>
                            <p className='text-sm font-semibold'>Rebecca Hutson</p>
                            <p className='text-xs'>CEO XYZ Company</p>
                        </span>
                    </div>
                </div>
                <div className='flex flex-col gap-2 p-5 shadow-4xl xl:m-5'>
                    <span className='flex gap-1 text-yellow-400'>
                        <MdOutlineStarPurple500 className='text-3xl'/>
                        <MdOutlineStarPurple500 className='text-3xl'/>
                        <MdOutlineStarPurple500 className='text-3xl'/>
                        <MdOutlineStarPurple500 className='text-3xl'/>
                        <MdOutlineStarPurple500 className='text-3xl'/>
                    </span>
                    <p className=' text-base text-gray-500'>Lorem Ipsum is simply dummy
                        text of the printing and
                        typesetting industry. Lorem
                        Ipsum has been the industry's
                        standard dummy text ever
                        since the 1500s,
                        when an unknown printer took
                        a galley of type and scrambled
                        it to make a type specimen</p>
                    <div className='flex gap-2 items-center text-primary'>
                        <img className='h-14 w-14 object-cover rounded-full' src={user2} alt="user" />
                        <span>
                            <p className='text-sm font-semibold'>John Doe</p>
                            <p className='text-xs'>CEO XYZ Company</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CustomerSay