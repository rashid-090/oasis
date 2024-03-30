import React from 'react'
import { Link } from 'react-router-dom'
import { Abtp,Abtp1,Abtp2,Abtp3,Abtp4,Missionp,Visionp,Commitep } from '../../assets'

const AboutUs = () => {
  return (
    <main>
        <div className='bg-oasisbg w-full bg-cover bg-top aspect-auto lg:aspect-[20/7]'>
            <div className='w-11/12 2xl:w-10/12 mx-auto text-white flex flex-col gap-y-4 py-14 xl:py-0 justify-center h-full'>
            <h1 className='text-3xl xl:text-5xl font-bold'>WE ARE A LEADING COOLING SYSTEMS<br className='hidden md:block'/> AND BRAKE LININGS PROVIDERIN UAE</h1>
            <p className='text-sm md:text-base xl:text-lg font-normal text-gray-200'>OUR TEAM, DEEPLY PASSIONATE AND TECHNICALLY ADEPT, IS COMMITTED<br className='hidden md:block'/> TO DELIVERING UNPARALLELED HEAT REJECTION SOLUTIONS IN THE UAE.</p>
            <Link to={'/contact-us'} className='bg-primary hover:bg-white hover:text-primary duration-150 uppercase text-base font-medium mt-3 px-10 w-fit py-3 rounded-xl'>Learn more</Link>
            </div>
        </div>
        {/*  */}
        <div className='w-11/12  mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-5 2xl:gap-x-20 py-10 xl:py-20'>
                <div className='overflow-hidden'>
                    <img className=' xl:h-96 h-60 md:h-full object-cover w-full' loading='lazy' src={Abtp} alt="oasis" />
                </div>
                <div className='flex flex-col justify-center gap-y-5'>
                    <h2 className='text-2xl 2xl:text-4xl font-bold text-primary'>A COMPANY REVOLUTIONIZING HEAT TRANSFER PARADIGMS.</h2>
                    <p className='text-base 2xl:text-lg text-secondary'>Oasis Cool & Heat Coils LLC, a subsidiary of Al Tabreed
                        established in 2017, aspires to lead the HVAC and cooling
                        sector through innovation and collaboration. We specialize
                        in manufacturing condenser coils and servicing heat
                        exchangers to enhance building safety, energy efficiency,
                        and cost savings. Our top-notch heavy commercial
                        radiators set a benchmark in the UAE market.</p>
                </div>
        </div>
        {/*  */}
        <div className='w-11/12  mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 pb-10 xl:pb-20'>
            <div className='relative overflow-hidden rounded-[2rem] 2xl:rounded-[3rem] shadow-2xl shadow-gray-900'>
                <img className='-z-10 h-80 md:h-52 lg:h-64 2xl:h-96 w-full object-cover' src={Missionp} alt="" />
                <h1 className='z-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white font-bold text-3xl md:text-xl xl:text-4xl w-full text-center'>OUR MISSION</h1>
            </div>
            <div className='relative overflow-hidden rounded-[2rem] 2xl:rounded-[3rem] shadow-2xl shadow-gray-900'>
                <img className='-z-10 h-80 md:h-52 lg:h-64 2xl:h-96 w-full object-cover' src={Visionp} alt="" />
                <h1 className='z-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white font-bold text-3xl md:text-xl xl:text-4xl w-full text-center'>OUR VISION</h1>
            </div>
            <div className='relative overflow-hidden rounded-[2rem] 2xl:rounded-[3rem] shadow-2xl shadow-gray-900'>
                <img className='-z-10 h-80 md:h-52 lg:h-64 2xl:h-96 w-full object-cover' src={Commitep} alt="" />
                <h1 className='z-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white font-bold text-3xl md:text-xl xl:text-4xl w-full text-center'>OUR COMMITMENT</h1>
            </div>
           
        </div>
        {/*  */}
       <div className='w-full h-full overflow-hidden'>
            <div className=' h-96 text-center py-10 bg-whychosbg bg-cover bg-center text-white xl:py-20 space-y-2'>
                <h3 className='text-xl 2xl:text-4xl font-normal '>Why Choose Us?</h3>
                <h2 className='w-11/12  mx-auto text-2xl 2xl:text-4xl font-bold '>WE DO WHAT IT TAKES TO HELP OUR CUSTOMERS SUCCEED!!</h2>
            </div>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 pb-10 xl:pb-20 -mt-44 lg:-mt-32'>
                <div className='bg-[#ededed] rounded-[2rem] text-center 2xl:rounded-[3rem] flex flex-col gap-y-2 items-center px-5 py-10 shadow-2xl'>
                    <img className='h-28 w-28 object-contain' src={Abtp1} alt="" />
                    <h4 className='text-primary text-lg font-semibold uppercase mt-3'>25+ YEARS OF EXPERIENCE</h4>
                    <p className='text-secondary font-medium text-[.7rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Quis ipsum suspendisse
                    ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis.</p>
                </div>
                <div className='bg-[#ededed] rounded-[2rem] text-center 2xl:rounded-[3rem] flex flex-col gap-y-2 items-center px-5 py-10 shadow-2xl'>
                    <img className='h-28 w-28 object-contain' src={Abtp2} alt="" />
                    <h4 className='text-primary text-lg font-semibold uppercase mt-3'>PROFESSIONAL TEAM</h4>
                    <p className='text-secondary font-medium text-[.7rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Quis ipsum suspendisse
                    ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis.</p>
                </div>
                <div className='bg-[#ededed] rounded-[2rem] text-center 2xl:rounded-[3rem] flex flex-col gap-y-2 items-center px-5 py-10 shadow-2xl'>
                    <img className='h-28 w-28 object-contain' src={Abtp4} alt="" />
                    <h4 className='text-primary text-lg font-semibold uppercase mt-3'>SAFETY IS OUR PRIORITY</h4>
                    <p className='text-secondary font-medium text-[.7rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Quis ipsum suspendisse
                    ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis.</p>
                </div>
                <div className='bg-[#ededed] rounded-[2rem] text-center 2xl:rounded-[3rem] flex flex-col gap-y-2 items-center px-5 py-10 shadow-2xl'>
                    <img className='h-28 w-28 object-contain' src={Abtp3} alt="" />
                    <h4 className='text-primary text-lg font-semibold uppercase mt-3'>100% CUSTOMER SATISFACTION</h4>
                    <p className='text-secondary font-medium text-[.7rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Quis ipsum suspendisse
                    ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis.</p>
                </div>
            </div>
            <div className='text-center text-secondary text-base md:text-lg 2xl:text-xl w-[90%] md:w-[80%] mx-auto pb-10 xl:pb-20'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            </div>
       </div>

    </main>
  )
}

export default AboutUs