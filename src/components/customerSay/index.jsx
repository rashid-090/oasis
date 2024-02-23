import React from 'react';
import { MdOutlineStarPurple500 } from "react-icons/md";

const CustomerSay = () => {
  return (
    <section className='py-10 lg:py-20'>
        <div className='w-10/12 mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2'>
            <div><h1>What Customers Are Saying...</h1></div>
            <div className='grid grid-cols-2 gap-5'>
                <div>
                    <span className='flex gap-1 text-yellow-400'>
                        <MdOutlineStarPurple500 className='text-3xl'/>
                        <MdOutlineStarPurple500 className='text-3xl'/>
                        <MdOutlineStarPurple500 className='text-3xl'/>
                        <MdOutlineStarPurple500 className='text-3xl'/>
                        <MdOutlineStarPurple500 className='text-3xl'/>
                    </span>
                    <p>Lorem Ipsum is simply dummy
                        text of the printing and
                        typesetting industry. Lorem
                        Ipsum has been the industry's
                        standard dummy text ever
                        since the 1500s,
                        when an unknown printer took
                        a galley of type and scrambled
                        it to make a type specimen</p>
                    <div>
                        <img src="" alt="" />
                        <span>
                            <p>Rebecca Hutson</p>
                            <p>CEO XYZ Company</p>
                        </span>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </section>
  )
}

export default CustomerSay