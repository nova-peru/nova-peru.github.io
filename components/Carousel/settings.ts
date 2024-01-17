import { Settings } from "react-slick";

export const settings:Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
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
            }
        },
        {
            breakpoint: 800,
            settings : {
                slidesToShow: 3,
                slidesToScroll:1,
                infinite:true,
            }
        }
    ]
  };