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
import '../styles/page-components/level-services.scss';
import useWindowDimensions from '../hooks/useWindowDimensions';

export const LevelsServices = () => {

  const { height, width } = useWindowDimensions();

  const displayHide = width < 530 ? 'hide' : 'show';

  return (
    <section className='levels-services'>
      {width < 400 ? <MainTitle className='levels-services__title'>УСЛУГИ <br /> DANSK STUDIO</MainTitle>
        :
        <MainTitle className='levels-services__title'>УСЛУГИ DANSK STUDIO</MainTitle>
      }
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
              <img className={displayHide ? 'hide' : 'show'} src={lessons} alt="speaking" />
              <Htag tag='h3'>{displayHide ? 'Авторские курсы' : 'Авторские курсы по произведению'}</Htag>
            </CartList>
          </NavLink>
          <NavLink to='lessons' className='link'>
            <CartList
              className='levels-services__cart'

            >
              <img className={displayHide ? 'hide' : 'show'} src={speaking} alt="lessons" />
              <Htag tag='h3'>{displayHide ? 'занятия один на один' : 'индивидуальные занятия'}</Htag>
            </CartList>
          </NavLink>
          <NavLink to='groups' className='link'>
            <CartList
              className='levels-services__cart'

            >
              <img className={displayHide ? 'hide' : 'show'} src={groups} alt="groups" />
              <Htag tag='h3'>занятия в группах</Htag>
            </CartList>
          </NavLink>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </section>
  )
}
