import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import '../styles/index.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
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
          <Link to='/' className={cn('header__item')}>{Home}</Link>
          <Link to='/about' className={cn('header__item')}>{About}</Link>
          <Link to='/services' className={cn('header__item')}>{Services}</Link>
          <Link to='/payment' className={cn('header__item')}>{Payment}</Link>
          <Link to='/enroll' className={cn('header__item')}>{Enroll}</Link>
          <Link to='/contacts' className={cn('header__item')}>{Contacts}</Link>
          <Link to='/reviews' className={cn('header__item')}>{Reviews}</Link>
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
