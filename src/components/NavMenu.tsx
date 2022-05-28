import React, { DetailedHTMLProps, HTMLAttributes, useEffect } from 'react'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import { INavMenu } from '../common/menu.interface';
import '../styles/components/nav-menu.scss';


interface NavMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  open?: (value: boolean) => void;
}

export const NavMenu = ({ open, className, ...props }: NavMenuProps): JSX.Element => {

  const { pathname } = useLocation();
  let navigate = useNavigate();

  const { Home, About, Services, Payment, Enroll, Reviews, Contacts } = INavMenu;


  const scrollToSection = (e: any, id: string) => {
    e.preventDefault();
    let currentSection = document.getElementById(id);
    currentSection && currentSection.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(id, id);

    if (open) {
      open(false)
    }

    if (pathname !== '/') {
      return navigate('/')
    }
  }

  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <nav className='nav'>
        <NavLink to='/' className='nav__item'>{Home}</NavLink>
        <NavLink to='/about' className='nav__item'>{About}</NavLink>
        <NavLink to='/services' className='nav__item'>{Services}</NavLink>
        <NavLink to='/payment' className='nav__item'>{Payment}</NavLink>
        <Link
          to='/'
          className='nav__item'
          onClick={e => scrollToSection(e, 'main-form')}
        >{Enroll}</Link>
        <Link
          to='/'
          className='nav__item'
          onClick={e => scrollToSection(e, 'footer')}
        >{Contacts}</Link>
        <Link
          to='/reviews'
          className='nav__item'
          onClick={e => scrollToSection(e, 'reviews')}
        >{Reviews}</Link>
      </nav>
    </>
  )
}
