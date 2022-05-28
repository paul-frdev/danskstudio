import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/services.scss';
import { CartList } from './CartList';
import { Htag } from './UI/Htag';
import { Tag } from './UI/Tag';
import groups from '../images/groups.png';
import lessons from '../images/lessons.png';
import speaking from '../images/speaking.png';
import { MainTitle } from './MainTitle';
import { FillFormModal } from '../modals/FillFormModal';
import { Button } from './UI/Button';

export const Services = () => {


  let elem = document.querySelector('#services');
  let rect = elem?.getBoundingClientRect();

  console.log('rect', rect);



  return (
    <section className='services' id='services'>
      <MainTitle className='services__title' title='after' position='left'>
        <span> Какие услуги
          <br />
          предлагает студия</span>
      </MainTitle>
      <div className="services__container">
        <div className="services__wrapper">
          <CartList className='services__cart' border='border-sm'>
            <Htag className='h3' tag='h3'>Авторские курсы по произношнию</Htag>
            <img src={speaking} alt="speaking" />
            <Button className='services__link' href='services/speaking'>Подробнее</Button>
          </CartList >
          <CartList className='services__cart' border='border-sm'>
            <div>
              <Htag tag='h3'>индивидуальные занятия</Htag>
              <Tag className='services__text' size='md'>произношение, подготовка к экзаменам, датский для начинающих и ваши индивидуальные языковые потребности</Tag>
            </div>
            <img src={lessons} alt="lessons" />
            <Button className='services__link' href='services/lessons'>Подробнее</Button>
          </CartList>
          <CartList className='services__cart' border='border-sm'>
            <div className='services-block'>
              <Htag tag='h3'>занятия в группах:</Htag>
              <Tag className='services__text' size='md'>датский с нуля, разговорный клуб, постановка произношения</Tag>
            </div>
            <img src={groups} alt="groups" />
            <Button className='services__link' href='services/groups'>Подробнее</Button>
          </CartList>
        </div>
      </div>
    </section>
  )
}


