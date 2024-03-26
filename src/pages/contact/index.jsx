import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import {Contactbg,Contactman} from '../../assets'

const ContactUs = () => {
  return (
    <main>
        <div className='bg-oasisbg w-full bg-cover bg-top aspect-auto lg:aspect-[20/7]'>
                <div className='w-11/12 2xl:w-10/12 mx-auto text-white flex flex-col gap-y-4 py-14 xl:py-0 justify-center h-full'>
                <h1 className='text-3xl md:text-5xl 2xl:text-7xl font-bold'>GET IN TOUCH WITH US</h1>
                <p className='text-sm md:text-base xl:text-lg 2xl:text-xl font-medium text-gray-200'>IT IS ABOUT PRECISION AND DIAMOND QUALITY ENGINEERING WHEN IT COMES<br className='hidden md:block'/>
                    TO OUR MANUFACTURING. WE GIVE YOU THE BEST HVAC AND BRAKING SOLUTIONS<br className='hidden md:block'/>
                    FROM BRAKE LININGS, CONDENSERS, RADIATORS, HEAT EXCHANGERS, AND CHILLERS.</p>
                </div>
        </div>
        {/* form */}
        <div className='w-11/12 md:w-10/12 lg:w-11/12 2xl:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-6 gap-10 2xl:gap-x-20 relative bg-[#f2f2f2] my-10 xl:my-20'>
            <div className='lg:col-span-4 p-5 xl:p-10'>
                <h2 className='text-2xl md:text-4xl 2xl:text-5xl font-semibold text-primary'>CONTACT US TODAY!</h2>
                <h3 className='text-xl md:text-3xl font-normal mb-8'>We are here to help.</h3>
                <form className='flex relative flex-col gap-4 osasis-form text-base xl:text-lg font-normal placeholder:text-gray-500'>
                    <input type="text" placeholder='Name' required/>
                    <input type="email" placeholder='email' required/>
                    <input type="number" placeholder='phone' inputMode='numeric'/>
                    <input type="text" placeholder='address'/>
                    <select className='appearance-none' required>
                        <option value="">select your inquiry</option>
                        <option value="option 1">option1</option>
                        <option value="option 2">option1</option>
                        <option value="option 3">option1</option>
                    </select>
                    <textarea rows="6" placeholder='message'></textarea>
                    <div className='flex items-center md:gap-3'>
                        <Checkbox sx={{color:'#0259b2','&.Mui-checked': {color: '#116f49',}}} required/>
                        <p className='text-sm md:text-base mt-1'>I hereby accept all terms & conditions.</p>
                    </div>
                    <button className='bg-primary w-fit h-12 text-white text-lg uppercase px-10 rounded-xl hover:bg-blue-600 duration-150' type='submit'>submit form</button>
                </form>
            </div>
            <div className='hidden lg:block lg:col-span-2'>
                <img className='h-full w-full object-cover -z-10' src={Contactbg} alt="image" loading='lazy'/>
                <img className='absolute bottom-0 right-0 h-[600px] lg:h-[550px] xl:h-[750px] 3xl:h-[900px]' src={Contactman} alt="man" loading='lazy'/>
            </div>  
        </div>
    </main>
  )
}

export default ContactUs