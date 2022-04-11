import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import '../styles/index.scss';
import cn from 'classnames';

interface MainTitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    title?: 'before' | 'after' | 'none',
    position?: 'right' | 'left'
}
export const MainTitle = ({ position, title = 'none', children, className, ...props }: MainTitleProps): JSX.Element => {
    return (
        <h4 className={cn('main-title', className, {
            'main-title--before': title === 'before',
            'main-title--after': title === 'after',
            'main-title--left': position === 'left',
            'main-title--right': position === 'right',
        })} {...props}>
            {children}
        </h4>
    )
}
