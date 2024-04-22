import React, { useState } from 'react';
import { Banner,ProductSlider,Counterui, ProgressLin} from '../../components';
import { Link } from 'react-router-dom';
import {Projectbg} from '../../assets';


const HomePage = () => {

  return (
    <main>
      <Banner/>
      {/*  */}
      <div className='bg-[#039878] text-white py-5 xl:py-7'>
          <div className='w-11/12 2xl:w-10/12 mx-auto'>
            <p className='text-sm text-center md:text-left  xl:text-xl font-semibold'>CONTACT US TODAY TO EXPERIENCE OUR COMMITMENT TO<br className='hidden md:block'/> EXCELLENCE AND TAILORED SOLUTIONS FIRSTHAND.</p>
          </div>
      </div>
      {/* about */}
      <div className='w-11/12 2xl:w-10/12 mx-auto grid grid-cols-1 xl:grid-cols-7 py-16 xl:py-24 gap-5'>
          <div className='xl:col-span-4 flex flex-col justify-center gap-y-5'>
            <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-primary'>ABOUT US</h2>
            <p className='text-base 2xl:text-lg text-secondary'>We at Oasis Group go above and beyond to ensure the satisfaction of our customers, and we always strive to provide exceptional customer service. Our fundamental principle is to deliver efficient and cost- effective services to our clients while maintaining the highest quality standards. Our team is dedicated to ensuring that we meet our clients' needs and exceed their expectations. Whether it's rentals or maintenance services, we ensure that our clients receive the best value for their money.</p>
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
                <p className='text-base md:text-sm lg:text-base 2xl:text-lg text-secondary'>To provide innovative and efficient
              cooling and heating solutions
              through our oasis Cool and Heat
              Coils, enhancing comfort and
              productivity while minimizing
              environmental impact.</p>
              </div>
          </div>  
      </div>
      {/* cta */}
      <div className='w-full h-full bg-ctabg bg-cover bg-center py-10 2xl:py-24'>
        <div className='w-11/12 2xl:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-y-5 text-white'>
            <h1 className='xl:col-span-4 text-2xl text-center md:text-left xl:text-5xl font-semibold'>HIGH QUALITY COOLING SYSTEMS GUARANTEED</h1>
            <sapn className=' grid place-items-center'><Link to={'/contact-us'} className='bg-primary hover:bg-white hover:text-primary duration-150 w-fit h-fit px-14 py-4 rounded-xl text-lg uppercase'>Contact us</Link></sapn>
        </div>
      </div>
      {/* products */}
      <ProductSlider/>
      {/* projects */}
      <div className='w-full bg-[#f3f4ef] text-primary'>
          <div className='grid grid-cols-1 md:grid-cols-2 h-full overflow-hidden'>
              <div className='relative flex justify-end items-end'>
                <img className='absolute object-cover top-0 left-0 right-0 bottom-0 h-full w-full' src={Projectbg} alt="project" />
                <div className='relative h-40 w-96 flex flex-col justify-center items-center gap-y-1 bg-gradient-to-r from-[#00800072] to-[#00000085]'>
                  <Counterui/>
                  <h2 className='text-white text-3xl font-medium'>Annual Projects</h2>
                </div>
              </div>
              {/*  */}
              <div>
                <div className='p-5 xl:p-14 flex flex-col gap-y-2 xl:gap-y-4'>
                  <h3 className='text-lg xl:text-3xl'>Why Choose Us?</h3>
                  <h2 className='text-xl xl:text-4xl font-bold'>WE PRODUCE AND WORK FOR EXCELLENCE</h2>
                  <p className='text-sm xl:text-lg font-medium'>Clients choose us because we are driven by a relentless pursuit of excellence in everything we produce and every task we undertake. At Oasis Cool & Heat Coils, our commitment to excellence is not just a goal; it's ingrained in our company culture. From the quality of our products to the precision of our workmanship, we set the standard for excellence in the industry. When you choose us, you're choosing a partner dedicated to delivering nothing short of the best.</p>
                </div>
                <div className=' p-5 xl:px-14 xl:py-8 bg-gradient-to-r from-[#196d6d] to-[#0c4884] text-white space-y-2'>
                    <p className='text-xs xl:text-lg font-medium'>STATISTICS OF GROWTH IN THE PAST 2 YEARS: <span className='font-bold'>80%</span></p>
                   <ProgressLin/>
                </div>
              </div>
          </div>
      </div>
    </main>

  )
}

export default HomePage