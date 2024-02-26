import React from "react";
import {buildimg,oasisImg,splug,shakabt} from '../../assets'

const AboutUs = () => {
  return (
    <main>
      <div className="">
        <div className="lg:pl-32 lg:h-[80vh] overflow-hidden grid grid-cols-1 md:grid-cols-6">
          <div className=" md:col-span-3 flex justify-start items-center pt-40 p-10 md:pt-40 lg:pt-20">
            <h1 className="text-primary text-5xl xl:text-7xl 2xl:text-8xl font-bold">
              About<br className="hidden lg:block"/> Oasis
            </h1>
          </div>
          <div className="md:col-span-3 md:pt-40 lg:pt-20 flex justify-end items-end bg-gradient-to-r from-[#119A7B] via-[#045B55] to-[#063142] ">
            <img className="xl:absolute xl:h-[400px] 2xl:h-[500px] object-cover" src={buildimg} alt="building" loading="lazy"/>
          </div>
        </div>
      </div>

      <div className="w-11/12 lg:w-10/12 mx-auto py-10 lg:py-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10 place-items-center">
        <div className=" xl:col-span-2">
            <img className="xl:h-96 xl:w-96 rounded-[3rem] object-cover" src={oasisImg} alt="image" />
        </div>
        <div className=" xl:col-span-3">
            <p className="text-base md:text-sm xl:text-2xl text-secondary">We at Oasis Group go above and beyond to ensure the satisfaction of our customers, strive to provide and we always exceptional service. Our customer fundamental principle is to deliver efficient and cost- effective services to our clients while maintaining the highest quality standards. Our team is dedicated to ensuring that we meet our clients' needs and exceed their it's expectations. Whether rentals or maintenance services, we ensure that our clients receive the best value for their money.</p>
        </div>
      </div>

      <div className="h-full w-full relative">
          <img className="object-cover h-full  w-full -z-20 absolute" src={splug} alt="plug" />
          <div className="bg-gradient-to-r from-[#29c39faf] to-[#083c97a3] absolute -z-10 top-0 bottom-0 left-0 right-0"></div>
          <div className="py-10 lg:py-32 w-11/12 lg:w-10/12 mx-auto z-10 text-white text-center flex flex-col justify-center gap-5 items-center h-full">
              <h2 className="text-4xl lg:text-6xl font-bold">Our Story</h2>
              <p className="text-base xl:text-lg">We began our journey 23 years ago in Hatta, UAE, which was then a rural area with limited transportation options for students commuting to schools located in central Dubai. Initially, we operated with a single Mitsubishi Rosa school bus, catering to a small but growing customer base. However, word of our reliable service soon spread throughout the urea, leading -to an increase in demand and prompting us to expand our operations. Today, we are proud to have established a strong presence in Dubai, Sharjah, and Ajman, and our unwavering commitment to delivering exceptional customer service and high-quality products has earned us the trust and loyalty of numerous valued customers. As we continue to expand and evolve, we remain dedicated to meeting our customers' ever-changing needs and providing them with the finest rental and automobile services.</p>
          </div>
      </div>

      <div className="w-11/12 lg:w-10/12 mx-auto gap-10 py-10 lg:py-20 grid grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-3 text-primary flex flex-col gap-3 justify-center">
          <h2 className="text-4xl md:text-2xl lg:text-5xl font-bold">MESSAGE FROM<br/> OUR CHAIRMAN</h2>
          <h3 className="text-2xl md:text-lg lg:text-3xl font-normal">ZAKIR HUSSAIN</h3>
          <p className="text-base lg:text-lg">We are committed to offer exceptional vehicle-related solutions. Whether you're traveling for business or pleasure, we're here to provide you with a transportation experience that is second to none. It's our privilege to serve you and we promise to exceed your expectations in every possible Looking forward to being your way. preferred service provider and delivering you with the highest level of satisfaction for all your vehicle-related needs.</p>
        </div>
        <div className="md:col-span-2 flex flex-col justify-center">
          <img className="object-cover rounded-[3rem]" src={shakabt} alt="shake" />
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
