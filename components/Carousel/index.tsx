'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./settings";
import { icons } from "./icons";
import Image from 'next/image'
import React from "react";

const Carousel = () => {
  return (
    <div id="Carousel">
      <Slider {...settings}>
        {icons.length > 0
          ? icons.map((e, i) =>
            <div key={i}>
              <Image width={50} height={50} src={e} alt="icon"></Image>
            </div>)
          : null}
      </Slider>
    </div>
  );
}

export default React.memo(Carousel)