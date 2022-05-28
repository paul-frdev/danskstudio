import React from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import cn from 'classnames';
import '../../styles/index.scss';
import { CustomArrowProps } from 'react-slick';


export const SlickPrevArrow = ({ currentSlide, slideCount, className, onClick, ...props }: CustomArrowProps): JSX.Element => {

  return (
    <button
      className={cn('button-prev', className)}
      onClick={onClick}
      {...props}
    >
      <MdOutlineArrowBackIos />
    </button>
  );
}