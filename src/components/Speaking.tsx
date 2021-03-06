import React, { useState } from 'react';
import { CartList } from './CartList';
import { Htag } from './UI/Htag';
import { Ptag } from './UI/Ptag';

import '../styles/components/speaking.scss';
import { Button } from './UI/Button';
import { AuthorCourseModal } from '../modals/AuthorCourseModal';

export const Speaking = () => {

  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(prev => !prev);
  
  return (
    <section className='speaking'>
      <div className="speaking__container">
        <CartList className='speaking__cart'>
          <Htag tag='h2'>1. Авторский курс по произношению “Основы произношения датского языка. Постановка
            основных звуков”</Htag>
          <Ptag tag='md'>Практический курс, где мы ставим основу и убираем ярко выраженный русский акцент. Работаем с
            постановкой произношения согласных звуков, основных гласных, разбираем буквосочетания,
            дифтонги и другие основные правила чтения.
          </Ptag>
          <br />
          <Htag tag='h2'>2. Авторский курс по произношению “Нюансы произношения датского языка. Фокус на
            гласные”</Htag>
          <Ptag tag='md'>Это практический курс, где мы работаем с вариантами гласных, толчком, долготой, лестницeй
            гласных и транскрипцией.
            Бонус- карточки квизлет с похожими по звучанию словами, озвучкой и транскрипцией, видео о
            транскрипции датского языка.
          </Ptag>
          <br />
          <Htag tag='h2'>3. Авторский курс по произношению “Мелодия и интонация датского языка. Вишенка на торте.”</Htag>
          <Ptag tag='md'>Практический курс, где мы работаем с ударением, ритмом, мелодией датского языка.
          </Ptag>
        </CartList>
        <CartList className='speaking__cart'>
          <Ptag tag='md'>Bидео-уроки + задания на закрепление материала уроков + обратная связь от меня на лингвистической платформе.</Ptag>
          <Ptag tag='md'>Bидео-урок длитcя 10-20 минут.</Ptag>
          <Ptag tag='md'>Bремя, которое потребуется на выполнение домашнего задания: 30-40 минут</Ptag>
          <Ptag tag='md'>Продолжительность: 5 недель, 2 урока в неделю.</Ptag>
          <Ptag tag='md'><span>Cтоимость: 2000 крон</span></Ptag>
          <Ptag tag='md'>Подойдёт тем, кто очень занят или работает по вечерам/выходным и сложно найти время на
            занятия в группе.</Ptag>
        </CartList>
        <div className="speaking__btns">
          <Button
            background='yellow'
            border='sm'
            borderColor='yellow'
          >узнать расписание</Button>
          <Button
            border='md'
            borderColor='yellow'
            boxShadow='yellow'
            onClick={toggleShow}
          >выбрать курс и ЗАПИСАТЬСЯ</Button>
            <AuthorCourseModal show={show} toggleShow={toggleShow}/>
        </div>
      </div>
    </section>
  )
}
