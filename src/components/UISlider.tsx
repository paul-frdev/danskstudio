import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { useState } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cn from 'classnames';
import { SlickNextArrow } from './UI/SlickNextArrow';
import { SlickPrevArrow } from './UI/SlickPrevArrow';

interface UISliderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
}
const UISlider = ({ children, className, ...props }: UISliderProps): JSX.Element => {
  const [, setActiveSlideIndex] = useState(0);
  const sliderSettings = {
    dots: true,
    navigator: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    autoplaySpeed: 10000,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
    appendDots: (dots: ReactNode): JSX.Element => (
      <div className="w-100">
        <ul className="list-unstyled d-flex flex-row justify-content-center align-items-center">
          {dots}
        </ul>
      </div>
    ),
    beforeChange(oldIndex: any, newIndex: React.SetStateAction<number>) {
      setActiveSlideIndex(newIndex);
    },
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 933,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={cn('ui-slider', className)} {...props}>
      <Slider {...sliderSettings}>{children}</Slider>
    </div>
  );
};
export default UISlider;
