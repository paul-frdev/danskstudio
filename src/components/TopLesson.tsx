import React from 'react'
import '../styles/components/top-lesson.scss';
import { Button } from './UI/Button';
import topLesson from '../images/top-lesson.png'

export const TopLesson = () => {
  return (
    <section className='top-lesson'>
      <div className="top-lesson__container">
        <div className="lesson-left">
          <h1 className="lesson-left__title">Хотите изучить датский язык <span>записывайтесь в нашу студию!</span></h1>
          <p className="lesson-left__text">Для любого уровня от новичка до продвинутого Первый пробный урок в Dansk Studio со скидкой 50%!</p>
          <Button 
          border='md'
          borderColor='yellow'
          boxShadow='yellow'
          className='lesson-left__btn'
          href='questionary'
          >Записаться на пробный ONLINE урок</Button>
        </div>
        <div className="lesson-right">
          <img src={topLesson} alt="top lesson" className="lesson-right__img" />
        </div>
      </div>
    </section>
  )
}
