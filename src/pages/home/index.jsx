import React from 'react';
import { Banner } from '../../components';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <main>
      <Banner/>
      {/*  */}
      <div className='bg-[#039878] text-white py-5 xl:py-7'>
          <div className='w-11/12 2xl:w-10/12 mx-auto'>
            <p className='text-sm text-center md:text-left font-medium xl:text-xl xl:font-semibold'>CONTACT US TODAY TO EXPERIENCE OUR COMMITMENT TO<br className='hidden md:block'/> EXCELLENCE AND TAILORED SOLUTIONS FIRSTHAND.</p>
          </div>
      </div>
      {/* about */}
      <div className='w-11/12 2xl:w-10/12 mx-auto grid grid-cols-1 xl:grid-cols-7 py-16 xl:py-24 gap-5'>
          <div className='xl:col-span-4 flex flex-col justify-center gap-y-5'>
            <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-primary'>A COMPANY REVOLUTIONIZING HEAT TRANSFER PARADIGMS.</h2>
            <p className='text-base 2xl:text-lg text-secondary'>Oasis Cool & Heat Coils LLC, a subsidiary of Al Tabreed established
              in 2017, aspires to lead the HVAC and cooling sector through
              innovation and collaboration. We specialize in manufacturing
              condenser coils and servicing heat exchangers to enhance
              building safety, energy efficiency, and cost savings. Our top-notch
              heavy commercial radiators set a benchmark in the UAE market.</p>
          </div>
          <div className='xl:col-span-3 flex flex-col md:flex-row xl:flex-col gap-10 xl:pl-10 xl:-mt-[350px]'>
              <div className='bg-primary text-white px-8 space-y-2 py-5 xl:p-14 rounded-[2rem] lg:rounded-[3rem] shadow-xl'>
                <h2 className='text-xl lg:text-2xl 2xl:text-3xl font-bold'>CUSTOMER-CENTRIC EXCELLENCE</h2>
                <p className='text-base md:text-sm lg:text-base 2xl:text-lg'>At Oasis Group, we prioritize customer
                  satisfaction, delivering efficient,
                  cost-effective services with unwavering
                  quality standards. Our dedicated team
                  ensures client needs are met.</p>
              </div>
              <div className='bg-[#e5e5e5] text-primary px-8 space-y-2  py-5 xl:p-14 rounded-[2rem] lg:rounded-[3rem] shadow-xl'>
                <h2 className='text-xl lg:text-2xl 2xl:text-3xl font-bold'>OUR MISSION</h2>
                <p className='text-base md:text-sm lg:text-base 2xl:text-lg text-secondary'>At Oasis Group, we prioritize customer
                  satisfaction, delivering efficient,
                  cost-effective services with unwavering
                  quality standards. Our dedicated team
                  ensures client needs are met.</p>
              </div>
          </div>  
      </div>
      {/* cta */}
      <div className='w-full h-full bg-ctabg bg-cover bg-center py-10 2xl:py-24'>
        <div className='w-11/12 2xl:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-5 text-white'>
            <h1 className='md:col-span-4 text-5xl font-bold'>HIGH QUALITY COOLING SYSTEMS GUARANTEED</h1>
            <sapn className=' grid place-items-center'><Link className='bg-primary w-fit h-fit px-20 py-4 rounded-xl '>Contact us</Link></sapn>
        </div>
      </div>
    </main>
  )
}

export default HomePage