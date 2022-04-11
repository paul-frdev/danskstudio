import React from 'react';
import cn from 'classnames';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import '../../styles/index.scss';

export interface TagProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size: "tiny" | "sm" | "md" | 'xl';
    href?: string;
    children: ReactNode;
}

export const Tag = ({ size = 'sm', href, children, className, ...props }: TagProps): JSX.Element => {
    return (
        <div className={cn('tag', className, {
            'tag__tiny': size === 'tiny',
            'tag__sm': size === 'sm',
            'tag__md': size === 'md',
            'tag__xl': size === 'xl',
        })}
            {...props}
        >{
                href ? <a href={href}>{children}</a> : <>{children}</>
            }
        </div>
    );
};