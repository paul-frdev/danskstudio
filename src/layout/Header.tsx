import React, { DetailedHTMLProps, HTMLAttributes, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../images/logo.svg';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaViber } from 'react-icons/fa';
import { CgMenuGridR } from 'react-icons/cg';
import { motion } from 'framer-motion';
import { MdOutlineCloseFullscreen } from 'react-icons/md';
import { NavMenu } from '../components/NavMenu';
import '../styles/layout/header.scss';
import cn from 'classnames';

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {

  const [isOpened, setIsOpened] = useState(false);
  const { pathname } = useLocation();

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20
      }
    },
    closed: {
      opacity: 0,
      x: '160%',
    }
  }
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const shrinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current!.classList.add('shrink');
      } else {
        headerRef.current!.classList.remove('shrink');
      }
    }
    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    };
  }, []);

  useEffect(() => {
    setIsOpened(false);
  }, [pathname])

  return (
    <header ref={headerRef} className={cn(className, 'header')}
      {...props}
    >
      <div className="header__container">
        <Link to="/" className='header__logo'>
          <LogoIcon />
        </Link>
        <CgMenuGridR className='menu-icon' onClick={() => setIsOpened(true)} />
        <motion.div
          className='mobile-menu'
          variants={variants}
          initial={'closed'}
          animate={isOpened ? 'opened' : 'closed'}
        >
          <Link to="/" className='header__logo'>
            <LogoIcon />
          </Link>
          <NavMenu open={setIsOpened}/>
          <MdOutlineCloseFullscreen className='mobile-menu__close' onClick={() => setIsOpened(false)} />
        </motion.div>
        <NavMenu open={setIsOpened}/>
        <div className='header__social'>
          <a href="/" className="header__link">
            <FaTelegramPlane className='header__icon' />
          </a>
          <a href="/" className="header__link">
            <FaWhatsapp className='header__icon' />
          </a>
          <a href="/" className="header__link">
            <FaViber className='header__icon' />
          </a>
        </div>
      </div>
    </header>
  )
}
