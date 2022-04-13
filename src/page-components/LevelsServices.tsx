import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { CartList } from '../components/CartList';
import { MainTitle } from '../components/MainTitle';
import { Htag } from '../components/UI/Htag';
import { Ptag } from '../components/UI/Ptag';
import groups from '../images/groups.png';
import lessons from '../images/lessons.png';
import speaking from '../images/speaking.png';
import { Button } from '../components';
import '../styles/index.scss';

export const LevelsServices = () => {



  return (
    <div className='levels-services'>
      <MainTitle>УСЛУГИ DANSK STUDIO</MainTitle>
      <Ptag tag='md' className='levels-services__text'>
        Если вы сомневаетесь в том, какой курс вам подойдет, тогда заполните
        <Link to='/'> АНКЕТУ для определения уровня,</Link>
        и мы поможем подобрать верное направление
      </Ptag>
      <div className="levels-services__container">
        <div className='levels-services__block'>
          <NavLink
            to='speaking'
            className='link'
          >
            <CartList
              className='levels-services__cart'

            >
              <img src={lessons} alt="speaking" />
              <Htag tag='h3'>АВТОРСКИЕ КУРСЫ
                ПО ПРОИЗНОШЕНИЮ</Htag>
            </CartList>
          </NavLink>
          <NavLink to='lessons' className='link'>
            <CartList
              className='levels-services__cart'

            >
              <img src={speaking} alt="lessons" />
              <Htag tag='h3'>индивидуальные занятия</Htag>
            </CartList>
          </NavLink>
          <NavLink to='groups' className='link'>
            <CartList
              className='levels-services__cart'

            >
              <img src={groups} alt="groups" />
              <Htag tag='h3'>занятия в группах</Htag>
            </CartList>
          </NavLink>
        </div>
        <div>
          <Outlet />
          <div className="levels-services__btns">
            <Button
            background='yellow'
            border='sm'
            borderColor='yellow'
            >узнать расписание</Button>
            <Button
            border='md'
            borderColor='yellow'
            boxShadow='yellow'
            >выбрать курс и ЗАПИСАТЬСЯ</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
