import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { CartList } from '../components/CartList';
import { MainTitle } from '../components/MainTitle';
import { Htag } from '../components/UI/Htag';
import { Ptag } from '../components/UI/Ptag';
import '../styles/index.scss';
import groups from '../images/groups.png';
import lessons from '../images/lessons.png';
import speaking from '../images/speaking.png';
import { Button } from '../components';

export const LevelsServices = () => {
  return (
    <div className='levels-services'>
      <MainTitle>УСЛУГИ DANSK STUDIO</MainTitle>
      <Ptag tag='md'>
        Если вы сомневаетесь в том, какой курс вам подойдет, тогда заполните
        <Link to='/'> АНКЕТУ для определения уровня,</Link>
        и мы поможем подобрать верное направление
      </Ptag>
      <div className='levels-services__block'>
        <NavLink to='lessons'>
          <CartList
            className='levels-services__cart'
            border='border-sm'
            shadow='shadow'>
            <img src={lessons} alt="lessons" />
            <Htag tag='h3'>АВТОРСКИЕ КУРСЫ
              ПО ПРОИЗНОШЕНИЮ</Htag>
          </CartList>
        </NavLink>
        <NavLink to='speaking'>
          <CartList
            className='levels-services__cart'
            border='border-sm'
            shadow='shadow'
          >
            <img src={speaking} alt="speaking" />
            <Htag tag='h3'>индивидуальные занятия</Htag>
          </CartList>
        </NavLink>
        <NavLink to='groups'>
          <CartList
            className='levels-services__cart'
            border='border-sm'
            shadow='shadow'
          >
            <img src={groups} alt="groups" />
            <Htag tag='h3'>занятия в группах</Htag>
          </CartList>
        </NavLink>
      </div>
      <div>
        <Outlet />
        <Button>узнать расписание</Button>
        <Button>выбрать курс и ЗАПИСАТЬСЯ</Button>
      </div>
    </div>
  )
}
