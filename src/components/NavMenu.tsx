import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { NavLink } from 'react-router-dom'
import { INavMenu } from '../common/menu.interface';
import cn from 'classnames';
import '../styles/index.scss';

interface NavMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const NavMenu = ({ className, ...props }: NavMenuProps) => {

  const { Home, About, Services, Payment, Enroll, Reviews, Contacts } = INavMenu;
  return (
    <>
      <nav className={cn('nav')}>
        <NavLink to='/' className={cn('nav__item')}>{Home}</NavLink>
        <NavLink to='/about' className={cn('nav__item')}>{About}</NavLink>
        <NavLink to='/services' className={cn('nav__item')}>{Services}</NavLink>
        <NavLink to='/payment' className={cn('nav__item')}>{Payment}</NavLink>
        <NavLink to='/questionary' className={cn('nav__item')}>{Enroll}</NavLink>
        <NavLink to='/contacts' className={cn('nav__item')}>{Contacts}</NavLink>
        <NavLink to='/reviews' className={cn('nav__item')}>{Reviews}</NavLink>
      </nav>
    </>
  )
}
