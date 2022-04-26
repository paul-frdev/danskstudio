import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/services.scss';
import { CartList } from './CartList';
import { Htag } from './UI/Htag';
import { Tag } from './UI/Tag';
import groups from '../images/groups.png';
import lessons from '../images/lessons.png';
import speaking from '../images/speaking.png';
import { MainTitle } from './MainTitle';
import { useModal } from '../hooks/useModal';
import { useScrollY } from '../hooks/useScrollY';
import { MainModal } from '../shared/MainModal';
import { FillFormModal } from '../modals/FillFormModal';

export const Services = () => {

  const { isShown, toggle } = useModal();
  const scrollY = useScrollY()

  console.log(scrollY);

  return (
    <section className='services'>
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
            <Link className='services__link' to='services/speaking'>Подробнее</Link>
          </CartList >
          <CartList className='services__cart' border='border-sm'>
            <div>
              <Htag tag='h3'>индивидуальные занятия</Htag>
              <Tag className='services__text' size='md'>произношение, подготовка к экзаменам, датский для начинающих и ваши индивидуальные языковые потребности</Tag>
            </div>
            <img src={lessons} alt="lessons" />
            <Link className='services__link' to='services/lessons'>Подробнее</Link>
          </CartList>
          <CartList className='services__cart' border='border-sm'>
            <div className='services-block'>
              <Htag tag='h3'>занятия в группах:</Htag>
              <Tag className='services__text' size='md'>датский с нуля, разговорный клуб, постановка произношения</Tag>
            </div>
            <img src={groups} alt="groups" />
            <Link className='services__link' to='services/groups'>Подробнее</Link>
          </CartList>
        </div>
      </div>
      <MainModal 
      isShown={isShown}
      hide={toggle}
      headerText='choose one of the students'
      appModalContent={
          <FillFormModal
             to='questionary'
          />
      }
      />
    </section>
  )
}


