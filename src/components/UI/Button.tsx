import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import '../../styles/UI/button.scss';
import cn from 'classnames';
import { BsChevronRight } from 'react-icons/bs'
import { motion } from 'framer-motion';

interface ButtonProps extends
  Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'> {
  background?: 'none' | 'yellow'
  borderColor?: 'red' | 'yellow' | 'none';
  boxShadow?: 'yellow' | 'none';
  border?: 'sm' | 'md' | 'none';
  arrow?: 'right' | 'none';
  href?: string;

  children: ReactNode
}

export const Button = ({ href, arrow = 'none', border = 'none', background = 'none', borderColor = 'none', boxShadow = 'none', className, children, ...props }: ButtonProps) => {
  return (
    <motion.button
      initial={false}
      whileHover={{ scale: 1.05 }}
      className={cn('button', className, {
        'button__color--red': borderColor === 'red',
        'button__color--yellow': borderColor === 'yellow',
        'button__shadow': boxShadow === 'yellow',
        'button__background': background === 'yellow',
        'button__border--small': border === 'sm',
        'button__border--middle': border === 'md'
      })} {...props}
    >
      {arrow !== 'none' &&
        <span className='button--arrow'>
          <BsChevronRight />
        </span>
      }
      {
        href ? <a href={href}>{children}</a> : <>{children}</>
      }
    </motion.button>
  )
}

