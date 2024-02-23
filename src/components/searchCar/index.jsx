import React from 'react';
import { IoIosSearch } from "react-icons/io";

const CarSearch = () => {
  return (
    <section className='py-10 px-5 lg:p-20 bg-green-100'>
        <form className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-y-5 gap-x-10 place-items-end border border-gray-300 px-5 py-10 lg:p-10 rounded-[3rem] shadow-xl'>
            <div className='w-full flex flex-col gap-2'>
                <label className='text-primary font-semibold text-xl capitalize'>pick up location</label>
                <div className='relative '>
                    <IoIosSearch className='absolute top-2.5 left-1 text-xl text-gray-400'/>
                    <input className='pl-7 bg-transparent caret-primary rounded-xl border-none p-2 w-full outline outline-green-300 outline-1 focus:outline-primary' type="text" placeholder='Location' />
                </div>
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label className='text-primary font-semibold text-xl capitalize'>Return location</label>
                <div className='relative '>
                    <IoIosSearch className='absolute top-2.5 left-1 text-xl text-gray-400'/>
                    <input className='pl-7 bg-transparent caret-primary rounded-xl border-none p-2 w-full outline outline-green-300 outline-1 focus:outline-primary' type="text" placeholder='Location' />
                </div>
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label className='text-primary font-semibold text-xl capitalize'>pick up date</label>
                <input className='bg-transparent caret-primary rounded-xl border-none p-2 w-full outline outline-green-300 outline-1 focus:outline-primary' type="date" />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label className='text-primary font-semibold text-xl capitalize'>return date</label>
                <input className='bg-transparent caret-primary rounded-xl border-none p-2 w-full outline outline-green-300 outline-1 focus:outline-primary' type="date" />
            </div>
            <button className='md:col-span-2 xl:col-span-1 bg-third text-white hover:bg-primary w-full h-fit py-2.5 rounded-2xl text-base lg:text-lg capitalize'>search car</button>
        </form>
    </section>
  )
}

export default CarSearch