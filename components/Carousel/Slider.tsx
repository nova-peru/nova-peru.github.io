'use client'

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import { icons } from "./icons";

interface SlideProps {
    elements: JSX.Element[]
}

const Slide = () => {
    const settings:Settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows:false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:false
                }
            },
            {
                breakpoint: 800,
                settings : {
                    slidesToShow: 3,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                }
            }
        ]
      };
  return (
      <Slider className="mx-5" {...settings}>
        {icons.length>0 
        ? icons.map((e,i) => 
        <div key={i}>
            <Image width={100} height={60} src={e} alt="icon"></Image>
        </div>)
        : null}
      </Slider>
  )
}

export default Slide