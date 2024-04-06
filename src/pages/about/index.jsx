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
                    <p className='text-base 2xl:text-lg text-secondary'>We at Oasis Group go above and beyond to ensure the satisfaction of our customers, and we always strive to provide exceptional customer service. Our fundamental principle is to deliver efficient and cost- effective services to our clients while maintaining the highest quality standards. Our team is dedicated to ensuring that we meet our clients' needs and exceed their expectations. Whether it's rentals or maintenance services, we ensure that our clients receive the best value for their money.</p>
                </div>
        </div>
        {/*  */}
        <div className='w-11/12  mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 pb-10 xl:pb-20'>
            <div className='group cursor-pointer relative overflow-hidden rounded-[2rem] 2xl:rounded-[3rem] shadow-2xl shadow-gray-900'>
                <img className='group-hover:blur-sm group-hover:scale-105 duration-200 transition-all ease-in -z-10 h-80 md:h-52 lg:h-64 2xl:h-96 w-full object-cover' src={Missionp} alt="" />
                <h1 className='opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-out  z-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white font-bold text-3xl md:text-xl xl:text-4xl w-full text-center'>OUR MISSION</h1>
                <p className='text-base md:text-xs lg:text-base xl:text-xl font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500  ease-out text-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full p-5 md:p-3 xl:p-10 text-center'>To provide innovative and efficient cooling and heating solutions through our Oasis Cool and Heat Coils, enhancing comfort and productivity while minimizing environmental impact.</p>
            </div>
            <div className='group cursor-pointer relative overflow-hidden rounded-[2rem] 2xl:rounded-[3rem] shadow-2xl shadow-gray-900'>
                <img className='group-hover:blur-sm group-hover:scale-105 duration-200 transition-all ease-in -z-10 h-80 md:h-52 lg:h-64 2xl:h-96 w-full object-cover' src={Visionp} alt="" />
                <h1 className=' opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-out z-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white font-bold text-3xl md:text-xl xl:text-4xl w-full text-center'>OUR VISION</h1>
                <p className='text-base md:text-xs lg:text-base xl:text-xl font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500  ease-out text-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full p-5 md:p-3 xl:p-10 text-center'>Our vision is to be a leading provider of cooling and heating technology, revolutionizing the industry with sustainable, reliable, and cost-effective solutions. We aim to create environments where people thrive, businesses flourish, and communities prosper.</p>
            </div>
            <div className='group cursor-pointer relative overflow-hidden rounded-[2rem] 2xl:rounded-[3rem] shadow-2xl shadow-gray-900'>
                <img className='group-hover:blur-sm group-hover:scale-105 duration-200 transition-all ease-in -z-10 h-80 md:h-52 lg:h-64 2xl:h-96 w-full object-cover' src={Commitep} alt="" />
                <h1 className=' opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-out z-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white font-bold text-3xl md:text-xl xl:text-4xl w-full text-center'>OUR COMMITMENT</h1>
                <p className='text-base md:text-xs lg:text-base xl:text-xl font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500  ease-out text-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full p-5 md:p-3 xl:p-10 text-center'>Our commitment is to provide high-quality, sustainable cooling and heating solutions, prioritize customer satisfaction, drive innovation, uphold integrity, empower our employees, and contribute to social responsibility.</p>
            </div>
           
        </div>
        {/*  */}
       <div className='w-full h-full overflow-hidden'>
            <div className=' h-96 text-center py-10 bg-whychosbg bg-cover bg-center text-white xl:py-20 space-y-2'>
                <h3 className='text-xl 2xl:text-4xl font-normal '>Why Choose Us?</h3>
                <h2 className='w-11/12  mx-auto text-2xl 2xl:text-4xl font-bold '>WE DO WHAT IT TAKES TO HELP OUR CUSTOMERS SUCCEED!!</h2>
            </div>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 pb-10 xl:pb-20 -mt-44 lg:-mt-32'>
                <div className='bg-[#ededed] rounded-[2rem] text-center 2xl:rounded-[3rem] flex flex-col gap-y-2 items-center px-5 py-10 shadow-xl'>
                    <img className='h-28 w-28 object-contain' src={Abtp1} alt="" />
                    <h4 className='text-primary text-lg font-semibold uppercase mt-3'>25+ YEARS OF EXPERIENCE</h4>
                    <p className='text-secondary font-medium text-[.7rem]'>With over 25 years of experience in the industry, Oasis Cool & Heat Coils has honed its expertise and built a solid reputation for delivering excellence in heat transfer solutions. Our extensive knowledge and proven track record ensure that we provide reliable and innovative services to meet our clients' needs.</p>
                </div>
                <div className='bg-[#ededed] rounded-[2rem] text-center 2xl:rounded-[3rem] flex flex-col gap-y-2 items-center px-5 py-10 shadow-xl'>
                    <img className='h-28 w-28 object-contain' src={Abtp2} alt="" />
                    <h4 className='text-primary text-lg font-semibold uppercase mt-3'>PROFESSIONAL TEAM</h4>
                    <p className='text-secondary font-medium text-[.7rem]'>At Oasis Cool & Heat Coils, our team is comprised of skilled professionals who are dedicated to delivering top-quality solutions with precision and expertise. With a commitment to ongoing training and development, our professionals stay at the forefront of industry trends, ensuring that our clients receive the highest level of service.</p>
                </div>
                <div className='bg-[#ededed] rounded-[2rem] text-center 2xl:rounded-[3rem] flex flex-col gap-y-2 items-center px-5 py-10 shadow-xl'>
                    <img className='h-28 w-28 object-contain' src={Abtp4} alt="" />
                    <h4 className='text-primary text-lg font-semibold uppercase mt-3'>SAFETY IS OUR PRIORITY</h4>
                    <p className='text-secondary font-medium text-[.7rem]'>Safety is paramount in everything we do at Oasis Cool & Heat Coils. We adhere to stringent safety protocols and standards to ensure the well-being of our employees, clients, and the communities we serve. From meticulous planning to rigorous implementation, we prioritize safety at every stage of our operations.</p>
                </div>
                <div className='bg-[#ededed] rounded-[2rem] text-center 2xl:rounded-[3rem] flex flex-col gap-y-2 items-center px-5 py-10 shadow-xl'>
                    <img className='h-28 w-28 object-contain' src={Abtp3} alt="" />
                    <h4 className='text-primary text-lg font-semibold uppercase mt-3'>100% CUSTOMER SATISFACTION</h4>
                    <p className='text-secondary font-medium text-[.7rem]'>At Oasis Cool & Heat Coils, customer satisfaction is not just a goal; it's our commitment. We go above and beyond to understand our clients' needs and deliver tailored solutions that exceed their expectations. With a focus on quality, reliability, and responsiveness, we strive to ensure that every client is completely satisfied with our services.</p>
                </div>
            </div>
            <div className='text-center text-secondary text-base md:text-lg 2xl:text-xl w-[90%] md:w-[80%] mx-auto pb-10 xl:pb-20'>
                <p>Embodying over two decades of expertise, Oasis Cool & Heat Coils boasts a seasoned team committed to excellence and safety at every turn. Our unwavering dedication to customer satisfaction drives us to deliver bespoke heat transfer solutions that redefine industry standards. Trust Oasis for innovation, professionalism, and unparalleled service, tailored to exceed your expectations.</p>
            </div>
       </div>

    </main>
  )
}

export default AboutUs