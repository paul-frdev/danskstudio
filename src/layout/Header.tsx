import React, { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react';
import '../styles/index.scss';
import cn from 'classnames';
import { Link, useParams, useRoutes } from 'react-router-dom';
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
  const params = useParams();

  useEffect(() => {
    setIsOpened(false)
  }, [params])


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
      x: '100%',
    }
  }

  return (
    <header className={cn(className, 'header')} {...props}>
      <div className="header__container">
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
