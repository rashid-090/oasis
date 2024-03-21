import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
    <div></div>
  )
}

export default RentServices