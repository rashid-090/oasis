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
            <div className='w-11/12 mx-auto md:w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-5 lg:gap-10 pt-10'>
                <div className='flex flex-col gap-y-8 items-center text-center'>
                    <div className='w-32 h-32 xl:w-40 xl:h-40 p-8 rounded-full bg-primary'>
                        <img className='object-contain w-full h-full' src={Careerp3} alt="carrer" />
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-2xl md:text-base lg:text-2xl text-primary font-semibold'>Work Life Balance</h3>
                        <p className='text-sm md:text-xs lg:text-sm font-normal text-center xl:text-justify tracking-normal text-secondary'>At Oasis Cool & Heat Coils, we believe in fostering a healthy work-life balance for all our employees. We understand the importance of personal time and strive to provide flexible working arrangements that accommodate individual needs. Whether it's remote work options, flexible scheduling, or generous vacation policies, we prioritize your well-being both inside and outside the office, allowing you to excel in your career while maintaining a fulfilling personal life.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-y-8 items-center text-center'>
                    <div className='w-32 h-32 xl:w-40 xl:h-40 p-8 rounded-full bg-primary'>
                        <img className='object-contain w-full h-full' src={Careerp2} alt="carrer" />
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-2xl md:text-base lg:text-2xl text-primary font-semibold'>Personal Education</h3>
                        <p className='text-sm md:text-xs lg:text-sm font-normal text-center xl:text-justify tracking-normal text-secondary'>At Oasis, we're committed to fostering a culture of continuous learning. Through workshops, training programs, and educational assistance initiatives, we invest in our employees' growth, ensuring they have the tools and opportunities to expand their skills and knowledge.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-y-8 items-center text-center'>
                    <div className='w-32 h-32 xl:w-40 xl:h-40 p-8 rounded-full bg-primary'>
                        <img className='object-contain w-full h-full' src={Careerp4} alt="carrer" />
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-2xl md:text-base lg:text-2xl text-primary font-semibold'>Health Benefits</h3>
                        <p className='text-sm md:text-xs lg:text-sm font-normal text-center xl:text-justify tracking-normal text-secondary'>Your well-being matters to us. That's why we offer comprehensive health benefits, including medical, dental, and vision coverage, as well as wellness programs and resources. We prioritize your physical and mental health so you can thrive both inside and outside the workplace.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-y-8 items-center text-center'>
                    <div className='w-32 h-32 xl:w-40 xl:h-40 p-8 rounded-full bg-primary'>
                        <img className='object-contain w-full h-full' src={Careerp1} alt="carrer" />
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-2xl md:text-base lg:text-2xl text-primary font-semibold'>Amazing Culture</h3>
                        <p className='text-sm md:text-xs lg:text-sm font-normal text-center xl:text-justify tracking-normal text-secondary'>Join our vibrant community at Oasis Cool & Heat Coils. Our culture is built on collaboration, innovation, and inclusivity. From team-building activities to recognition programs, we foster an environment where every individual is valued, ideas are encouraged, and success is celebrated collectively. At Oasis, you're not just an employee; you're part of a supportive and inspiring family.</p>
                    </div>
                </div>
            </div>
        </div>
        {/*  */}
        <div className='flex flex-col xl:flex-row'>
            <div className='flex-1'><img className='object-cover w-full h-full md:h-80 lg:h-[500px] xl:h-full object-center' src={Careerbg2} alt="careers" /></div>
            <div className='flex-1'>
                <div className='p-5 2xl:p-10 space-y-5'>
                    <h2 className='text-2xl lg:text-3xl font-bold text-primary text-left'>Experience Exceptional Leadership and a Vibrant Team Culture at Oasis Cool & Heat Coils.</h2>
                    <p className='text-base text-secondary'>Meaningful. Inspiring. Fulfilling. These are the sentiments echoed by our team members at Oasis Cool & Heat Coils. As part of our team, you'll have the freedom to make impactful decisions while also collaborating closely with colleagues. Each role within our organization is instrumental in driving our projects forward and contributing to the overall success and growth of our company.<br/> <br/>For qualified candidates, we offer:</p>
                    <div className='space-y-2 xl:space-y-4'>
                        <span className='flex items-start gap-3 md:gap-4'>
                            <IoIosArrowDroprightCircle className='text-primary text-3xl'/>
                            <p className='text-base text-gray-600 w-full'>A welcoming and flexible work environment that encourages autonomy and provides meaningful tasks for all team members.</p>
                        </span>
                        <span className='flex items-start gap-3 md:gap-4'>
                            <IoIosArrowDroprightCircle className='text-primary text-3xl'/>
                            <p className='text-base text-gray-600 w-full'>Opportunities for professional development through funding for work-related courses and training programs.</p>
                        </span>
                        <span className='flex items-start gap-3 md:gap-4'>
                            <IoIosArrowDroprightCircle className='text-primary text-3xl'/>
                            <p className='text-base text-gray-600 w-full'>Comprehensive health benefits, including 100% coverage of health and life insurance premiums.</p>
                        </span>
                        <span className='flex items-start gap-3 md:gap-4'>
                            <IoIosArrowDroprightCircle className='text-primary text-3xl'/>
                            <p className='text-base text-gray-600 w-full'>The opportunity to collaborate with smart, talented coworkers who share a passion for innovation and are dedicated to shaping a better future together.</p>
                        </span>
                    </div>
                    <p className='text-base text-gray-600'>Join us at Oasis Cool & Heat Coils and become part of a team where great leadership and an awesome team culture are at the heart of everything we do.</p>
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