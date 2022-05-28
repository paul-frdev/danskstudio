import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import cn from 'classnames';
import '../../styles/index.scss';
import { CustomArrowProps } from 'react-slick';

export const SlickNextArrow = ({currentSlide, slideCount, className, onClick, ...props }: CustomArrowProps): JSX.Element => {

	return (
		<button
			className={cn('button-next', className)}
			onClick={onClick}
			{...props}
		>
			<MdOutlineArrowForwardIos />
		</button>
	);
}
