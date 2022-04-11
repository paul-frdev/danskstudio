import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import cn from 'classnames';
import '../../styles/index.scss';


export interface PtagProps
    extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
    > {
    tag: "sm" | "md" | "xl";
    children: ReactNode;
}
export const Ptag = ({ tag = 'sm', children, className }: PtagProps): JSX.Element => {
    return (
        <p className={cn('p', className, {
            'p--md': tag === 'md',
            'p--xl': tag === 'xl',
            'p--sm': tag === 'sm'
        })}>
            {children}
        </p>
    );
};
