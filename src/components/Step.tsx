import React from 'react';
import { MainTitle } from './MainTitle';
import { Button } from './UI/Button';
import { Ptag } from './UI/Ptag';
import { Tag } from './UI/Tag';
import stepImg from '../images/step.jpg';
import '../styles/components/step.scss';

export const Step = () => {
  return (
    <section className='step'>
      <div>
        <MainTitle className='step__title' title='before' position='right'>
          <span>
            Сделайте первый шаг
            <br/>
            к изучению датского языка
          </span>
        </MainTitle>
      </div>
      <div className="step__container">
        <div className="step__left">
          <div className="step__item">
            <Tag className="step__item-num" size='md'>01</Tag>
            <Ptag tag='md'>Выбор подходящего
              формата обучения</Ptag>
          </div>
          <div className="step__item">
            <Tag className="step__item-num" size='md'>02</Tag>
            <Ptag tag='md'>подача заявки
              на обучение</Ptag>
          </div>
          <div className="step__item">
            <Tag className="step__item-num" size='md'>03</Tag>
            <Ptag tag='md'>знакомство по телефону,
              назначение урока</Ptag>
          </div>
          <div className="step__item">
            <Tag className="step__item-num" size='md'>04</Tag>
            <Ptag tag='md'>ваше первое пробное
              занятие</Ptag>
          </div>
          <div className='step__block'>
            <Button
              className='step__block-btn'
              background='yellow'
              border='sm'
              color='yellow'
              borderColor='yellow'
              href='questionary'
            >анкета для определения уровня</Button>
          </div>
        </div>
        <div className="step__right">
          <img src={stepImg} alt="stepImg" />
        </div>
      </div>
    </section>
  )
}
