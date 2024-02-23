import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle  } from "react-icons/io";
import {rentServiceData} from '../constant/data'

function SampleNextArrow({ onClick }) {
	return (
		<div className="arrow1 arrow-right1" onClick={onClick}>
			<IoIosArrowDroprightCircle className="text-primary hover:text-third duration-150"/>
		</div>
	);
}

function SamplePrevArrow({ onClick }) {
	return (
        <div className="arrow1 arrow-left1" onClick={onClick}>
            <IoIosArrowDropleftCircle className="text-primary hover:text-third duration-150"/>
        </div>
        );
}


const RentServices = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        loop:true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0,
              arrows:false,
              dots:true
            }
          }
        ]
      };
  return (
    <div className="w-11/12 md:w-10/12 mx-auto text-center rentserviceCarousal py-10 lg:py-20 ">
      <h1 className='text-2xl lg:text-5xl pb-10 font-bold text-primary'>Rent a Service</h1>
      <Slider {...settings}>
        {rentServiceData?.map((d,i)=>(
            <div key={i} className=" relative overflow-hidden">
                <img className="rounded-3xl object-cover brightness-75" src={d.img} alt={d.title} loading="lazy"/>
                <h1 className="text-2xl md:text-2xl uppercase text-white font-bold absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">{d.title}</h1>
            </div>
        ))}
      </Slider>
    </div>
  )
}

export default RentServices