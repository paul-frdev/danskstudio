import React, { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react';
import '../styles/layout/header.scss';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../images/logo.svg';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaViber } from 'react-icons/fa';
import { CgMenuGridR } from 'react-icons/cg';
import { motion } from 'framer-motion';
import { MdOutlineCloseFullscreen } from 'react-icons/md';
import { NavMenu } from '../components/NavMenu';

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {

  const [isOpened, setIsOpened] = useState(false);
  const [isShrunk, setShrunk] = useState(false);
  const params = useParams();


  useEffect(() => {
    setIsOpened(false)
  }, [params])

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

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

  return (
    <header className={cn(className, 'header', {
      'header--fixed': isShrunk
    })}
      {...props}
    >
      <div className={cn("header__container")}>
        <Link to="/" className={cn('header__logo')}>
          <LogoIcon />
        </Link>
        <CgMenuGridR className='menu-icon' onClick={() => setIsOpened(true)} />
        <motion.div
          className='mobile-menu'
          variants={variants}
          initial={'closed'}
          animate={isOpened ? 'opened' : 'closed'}
        >
          <Link to="/" className={cn('header__logo')}>
            <LogoIcon />
          </Link>
          <NavMenu />
          <MdOutlineCloseFullscreen className='mobile-menu__close' onClick={() => setIsOpened(false)} />
        </motion.div>
        <NavMenu />
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
