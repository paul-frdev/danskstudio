import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../images/logo.svg';
import { SiTelegram } from 'react-icons/si';
import { RiWhatsappFill } from 'react-icons/ri';
import { FaInstagramSquare } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { SiMastercard } from 'react-icons/si'
import { SiVisa } from 'react-icons/si';
import { FaApplePay } from 'react-icons/fa';

import '../styles/layout/footer.scss';
import cn from 'classnames';

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const Footer = ({ className }: FooterProps): JSX.Element => {


  return (
    <footer className={cn('footer', className)} id='footer'>
      <div className="footer__container">
        <div className="footer__top">
          <Link to='/' className="footer__logo">
            <LogoIcon />
          </Link>
          <ul className="footer__list">
            <li className="footer__item"><Link to="services" className="footer__link">Услуги</Link></li>
            <li className="footer__item"><Link to="about" className="footer__link">О преподавателе</Link></li>
            <li className="footer__item"><Link to="payment" className="footer__link">Оплата</Link></li>
            <li className="footer__item"><Link to="/" className="footer__link">Отзывы</Link></li>
            <li className="footer__item"><Link to="/" className="footer__link">Политика конфиденциальности</Link></li>
            <li className="footer__item"><Link to="/" className="footer__link">Договор оферты</Link></li>
          </ul>
          <div className="footer__contacts">
            <h3>Контакты</h3>
            <a href="/" className='link'>
              <SiTelegram className='telegram' />
            </a>
            <a href="/" className='link'>
              <RiWhatsappFill className='whatsup' />
            </a>

            <h4>E-mail:</h4>
            <a href="/" className='link'>
              <FaInstagramSquare className='instagram' />
            </a>
            <a href="/" className='link'>
              <BsFacebook className='facebook' />
            </a>
          </div>
          <div className="footer__payment">
            <h4>Оплата</h4>
            <SiMastercard className='mastercart' />
            <SiVisa className='visa' />
            <FaApplePay className='apple' />
          </div>
        </div>
        <div className="footer__botom">
          <p>Copyright © <span>{new Date().getFullYear()}</span> «Dansk Studio». Студия датского языка</p>
        </div>
      </div>
    </footer >
  )
}
