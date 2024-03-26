import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle  } from "react-icons/io";
import {ProductsData} from '../constant/data'
import { Link } from "react-router-dom";


const ProductSlider = () => {
    const [_, setInit] = useState();
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  return (
    <div className="py-10 xl:py-20 relative h-full w-12/12 xl:w-11/12 mx-auto bg-white overflow-hidden">
    <h1 className="text-3xl md:text-5xl  font-bold pb-5 xl:pb-10 text-black text-center">
            OUR PRODUCTS
      </h1>
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={30}

        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}

        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
            
          },
        }}
        onInit={() => setInit(true)}
        modules={[Autoplay, Navigation]}
        className="mySwiper z-10 w-[90%]"
      >
        {/* swiper content */}
      
            {ProductsData?.map((item,i)=>(
                <SwiperSlide key={i}>
                    <div className="text-left bg-[#eaebe6] rounded-[2rem] overflow-hidden border-r-8 border-b-8 border-primary">
                        <img className="h-52 w-full object-cover" loading="lazy" src={item.img} alt={item.title} />
                        <div className="p-5 flex flex-col gap-y-2 md:gap-y-4">
                            <h2 className="text-lg xl:text-xl font-bold uppercase text-primary">{item.title}</h2>
                            <p className="text-xs xl:text-sm font-medium text-secondary">{item.descption}</p>
                            <Link className="bg-primary hover:bg-blue-600 text-white w-fit px-6 py-2 rounded-full uppercase text-sm md:text-base font-medium ">learn more</Link>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
     
        {/* swiper content */}
      </Swiper>
      {/* Navigations */}
      <div className="hidden w-full xl:flex justify-between text-primary hover:text-blue-600 duration-150 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-20">
        <button className="absolute left-0" ref={prevRef}>
          <IoIosArrowDropleftCircle className="text-5xl" />
        </button>
        <button className="absolute right-0" ref={nextRef}>
          <IoIosArrowDroprightCircle className="text-5xl" />
        </button>
      </div>
    </div>
  )
}

export default ProductSlider