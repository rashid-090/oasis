import React from 'react';
import {Careerp1,Careerbg2,Careerp2,Careerp3,Careerp4} from '../../assets'
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Careers = () => {
  return (
    <main>
        <div className='bg-carrerbg w-full bg-cover bg-top aspect-auto lg:aspect-[20/7]'>
            <div className='w-11/12 2xl:w-10/12 mx-auto text-white flex flex-col gap-y-4 py-14 xl:py-0 justify-center h-full'>
              <h1 className='text-3xl md:text-5xl 2xl:text-7xl font-bold'>BE A PART OF OUR FAMILY</h1>
              <p className='text-sm md:text-base xl:text-lg 2xl:text-xl font-normal text-gray-200'>WE TAKE OUR RESPONSIBILITIES AS AN EMPLOYER VERY SERIOUSLY.<br className='hidden md:block'/>
              WE TAKE GOOD CARE OF OUR NEW EMPLOYEES, BUT WE ALSO CHALLENGE<br className='hidden md:block'/>
              THEM FROM THE VERY BEGINNING BY GIVING THEM RESPONSIBILITIES VERY QUICKLY.</p>
            </div>
        </div>
        {/*  */}
        <div className='w-11/12 xl:w-10/12 mx-auto py-10 xl:py-20'>
            <h2 className='text-2xl lg:text-4xl 2xl:text-4xl font-bold text-primary text-center'>POSSIBILITIES ARE ENDLESS</h2>
            <div className='w-11/12 mx-auto md:w-full grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-5 lg:gap-10 pt-10'>
                <div className='flex flex-col gap-y-8 items-center text-center'>
                    <div className='w-32 h-32 xl:w-40 xl:h-40 p-8 rounded-full bg-primary'>
                        <img className='object-contain w-full h-full' src={Careerp3} alt="carrer" />
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-2xl md:text-base lg:text-2xl text-primary font-semibold'>Work Life Balance</h3>
                        <p className='text-sm md:text-xs lg:text-sm font-normal text-center xl:text-justify tracking-normal text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione placeat aperiam aliquam eligendi aut fuga. Natus eligendi dolore illum.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-y-8 items-center text-center'>
                    <div className='w-32 h-32 xl:w-40 xl:h-40 p-8 rounded-full bg-primary'>
                        <img className='object-contain w-full h-full' src={Careerp2} alt="carrer" />
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-2xl md:text-base lg:text-2xl text-primary font-semibold'>Personal Education</h3>
                        <p className='text-sm md:text-xs lg:text-sm font-normal text-center xl:text-justify tracking-normal text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione placeat aperiam aliquam eligendi aut fuga. Natus eligendi dolore illum.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-y-8 items-center text-center'>
                    <div className='w-32 h-32 xl:w-40 xl:h-40 p-8 rounded-full bg-primary'>
                        <img className='object-contain w-full h-full' src={Careerp4} alt="carrer" />
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-2xl md:text-base lg:text-2xl text-primary font-semibold'>Health Benefits</h3>
                        <p className='text-sm md:text-xs lg:text-sm font-normal text-center xl:text-justify tracking-normal text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione placeat aperiam aliquam eligendi aut fuga. Natus eligendi dolore illum.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-y-8 items-center text-center'>
                    <div className='w-32 h-32 xl:w-40 xl:h-40 p-8 rounded-full bg-primary'>
                        <img className='object-contain w-full h-full' src={Careerp1} alt="carrer" />
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-2xl md:text-base lg:text-2xl text-primary font-semibold'>Amazing Culture</h3>
                        <p className='text-sm md:text-xs lg:text-sm font-normal text-center xl:text-justify tracking-normal text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione placeat aperiam aliquam eligendi aut fuga. Natus eligendi dolore illum.</p>
                    </div>
                </div>
            </div>
        </div>
        {/*  */}
        <div className='flex flex-col lg:flex-row'>
            <div className='flex-1'><img className='object-cover w-full h-full md:h-80 lg:h-full object-center' src={Careerbg2} alt="careers" /></div>
            <div className='flex-1'>
                <div className='p-5 2xl:px-20 2xl:py-10 space-y-5'>
                    <h2 className='text-2xl lg:text-4xl 2xl:text-4xl font-bold text-primary text-left'>GREAT LEADERSHIP AND<br className='hidden lg:block'/> AWESOME TEAM CULTURE.</h2>
                    <p className='text-base text-secondary'>Meaningful. Inspiring. Fun. These are a few of the words people use
                    to describe their careers at Al Tabreed Industries. As one of us,
                    you're encouraged to exercise autonomy in your decision making
                    and also work collaboratively as part of the team. Every position at
                    Al Tabreed is impactful and plays a central role in our projects as
                    well as the growth of the company. For qualified candidates, we
                    offer:</p>
                    <div className='space-y-2 xl:space-y-4'>
                        <span className='flex items-start gap-3 md:gap-4'>
                            <IoIosArrowDroprightCircle className='text-primary text-5xl md:text-3xl'/>
                            <p className='text-base text-gray-600'>A friendly and flexible environment with lots of autonomy and meaningful work for everyone.</p>
                        </span>
                        <span className='flex items-start gap-3 md:gap-4'>
                            <IoIosArrowDroprightCircle className='text-primary text-5xl md:text-3xl'/>
                            <p className='text-base text-gray-600'>Funding for work-related courses and training to accelerate your professional development.</p>
                        </span>
                        <span className='flex items-start gap-3 md:gap-4'>
                            <IoIosArrowDroprightCircle className='text-primary text-5xl md:text-3xl'/>
                            <p className='text-base text-gray-600'>Comprehensive health coverage and 100% paid premiums across health and life insurance.</p>
                        </span>
                        <span className='flex items-start gap-3 md:gap-4'>
                            <IoIosArrowDroprightCircle className='text-primary text-6xl md:text-4xl'/>
                            <p className='text-base text-gray-600'>Smart, talented co-workers all growing and enjoying working together to help us shape a better future.</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        {/*  */}
        <div className='w-11/12 xl:w-[90%] mx-auto py-10 xl:py-20'>
            <h2 className='text-2xl lg:text-4xl 2xl:text-4xl font-bold text-primary text-center'>AVAILABLE VACANCIES</h2>
            <div className='pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 xl:gap-8 text-center text-xs sm:text-base lg:text-xl 2xl:text-3xl'>
                <span className='bg-primary text-white p-2 sm:p-4 md:p-3 lg:p-4 rounded-md md:rounded-xl'>
                    <h2>TECHNICIAN</h2>
                </span>
                <span className='bg-primary text-white p-2 sm:p-4 md:p-3 lg:p-4 rounded-md md:rounded-xl'>
                    <h2>OPERATOR</h2>
                </span>
                <span className='bg-primary text-white p-2 sm:p-4 md:p-3 lg:p-4 rounded-md md:rounded-xl'>
                    <h2>SITE SUPERVISOR</h2>
                </span>
                <span className='bg-primary text-white p-2 sm:p-4 md:p-3 lg:p-4 rounded-md md:rounded-xl'>
                    <h2>DRAFTSMAN</h2>
                </span>
            </div>
        </div>
    </main>
  )
}

export default Careers