import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import '../../styles/UI/htag.scss';
import cn from 'classnames';


export interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode;
}

export const Htag = ({ tag = 'h3', children, className }: HtagProps): JSX.Element => {
    switch (tag) {
        case 'h1':
            return <h1 className={cn('h1', className)}>{children}</h1>;
        case 'h2':
            return <h2 className={cn('h2', className)}>{children}</h2>;
        case 'h3':
            return <h3 className={cn('h3', className)}>{children}</h3>;
        default:
            return <></>;
    }
};

