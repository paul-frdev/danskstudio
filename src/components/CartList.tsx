import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import '../styles/index.scss';
import cn from 'classnames';

interface CartListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  border?: 'border-md' | 'border-sm' | 'none';
  shadow?: 'shadow' | 'none'
  children: ReactNode;
}

export const CartList = ({ shadow = 'none', border = 'none', children, className, ...props }: CartListProps): JSX.Element => {
  return (
    <div className={cn('cart-list', className, {
      'cart-list__border--md': border === 'border-md',
      'cart-list__border--sm': border === 'border-sm',
      'cart-list__shadow': shadow === 'shadow'
    })} {...props}>
      {children}
    </div>
  )
}
