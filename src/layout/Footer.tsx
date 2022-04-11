import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom';
import '../styles/index.scss';
import cn from 'classnames';
import { ReactComponent as LogoIcon } from '../images/logo.svg';
import { SiTelegram } from 'react-icons/si';
import { RiWhatsappFill } from 'react-icons/ri';
import { FaInstagramSquare } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { SiMastercard } from 'react-icons/si'
import {SiVisa} from 'react-icons/si';
import {FaApplePay} from 'react-icons/fa';

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const Footer = ({ className }: FooterProps): JSX.Element => {


  return (
    <footer className={cn('footer', className)}>
      <div className="footer__container">
        <div className="footer__top">
          <Link to='/' className="footer__logo">
            <LogoIcon />
          </Link>
          <ul className="footer__list">
            <li className="footer__item"><a href="/" className="footer__link">Услуги</a></li>
            <li className="footer__item"><a href="/" className="footer__link">О преподавателе</a></li>
            <li className="footer__item"><a href="/" className="footer__link">Оплата</a></li>
            <li className="footer__item"><a href="/" className="footer__link">Отзывы</a></li>
            <li className="footer__item"><a href="/" className="footer__link">Политика конфиденциальности</a></li>
            <li className="footer__item"><a href="/" className="footer__link">Договор оферты</a></li>
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
          <SiMastercard className='mastercart'/>
           <SiVisa className='visa'/>
           <FaApplePay className='apple'/>
          </div>
        </div>
        <div className="footer__botom">
          <p>Copyright © <span>{new Date().getFullYear()}</span> «Dansk Studio». Студия датского языка</p>
        </div>
      </div>

    </footer >
  )
}
