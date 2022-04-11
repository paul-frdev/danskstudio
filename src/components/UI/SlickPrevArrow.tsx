import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import cn from 'classnames';
import '../../styles/index.scss';


interface SlickPrevArrowProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    onClick?: () => void;
}

export const SlickPrevArrow = ({ className, onClick, ...props }: SlickPrevArrowProps): JSX.Element => {

    return (
        <div
            className={cn('button-prev', className)}
            onClick={onClick}
            {...props}
        >
            <MdOutlineArrowBackIos/>
        </div>
    );
}