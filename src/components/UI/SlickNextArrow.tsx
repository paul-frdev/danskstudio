import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import cn from 'classnames';
import '../../styles/index.scss';


interface SlickNextArrowProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	onClick?: () => void;
}

export const SlickNextArrow = ({ className, onClick, ...props }: SlickNextArrowProps): JSX.Element => {

	return (
		<div
			className={cn('button-next', className)}
			onClick={onClick}
			{...props}
		>
			<MdOutlineArrowForwardIos />
		</div>
	);
}
