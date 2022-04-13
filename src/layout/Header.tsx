import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import '../styles/index.scss';
import cn from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { HeaderMenu } from '../common/menu.interface';
import { ReactComponent as LogoIcon } from '../images/logo.svg';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaViber } from 'react-icons/fa';
interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {


  const { Home, About, Services, Payment, Enroll, Reviews, Contacts } = HeaderMenu;

  return (
    <header className={cn('header')} {...props}>
      <div className="header__container">
        <Link to="/" className={cn('header__logo')}>
          <LogoIcon />
        </Link>
        <nav className={cn('header__nav')}>
          <NavLink to='/' className={cn('header__item')}>{Home}</NavLink>
          <NavLink to='/about' className={cn('header__item')}>{About}</NavLink>
          <NavLink to='/services' className={cn('header__item')}>{Services}</NavLink>
          <NavLink to='/payment' className={cn('header__item')}>{Payment}</NavLink>
          <NavLink to='/questionary' className={cn('header__item')}>{Enroll}</NavLink>
          <NavLink to='/contacts' className={cn('header__item')}>{Contacts}</NavLink>
          <NavLink to='/reviews' className={cn('header__item')}>{Reviews}</NavLink>
        </nav>
        <div className='header__social'>
          <a href="/" className="header__link">
            <FaTelegramPlane className='header__icon'/>
          </a>
          <a href="/" className="header__link">
            <FaWhatsapp className='header__icon'/>
          </a>
          <a href="/" className="header__link">
            <FaViber className='header__icon'/>
          </a>
        </div>
      </div>
    </header>
  )
}
