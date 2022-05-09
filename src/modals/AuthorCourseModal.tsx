import React, { useState } from 'react';
import '../styles/modals/courses-modals.scss';
import { AppSelect } from '../components/UI/AppSelect';

interface AuthorCourseModalProps {
  onClick?: () => void
}

export const AuthorCourseModal = ({ onClick }: AuthorCourseModalProps): JSX.Element => {


  const options = [
    {
      id: 4, value: 'Авторский курс по произношению Основы произношения датского языка. Постановка основных звуков', label: 'Продолжительность: 5 недель, 2 урока в неделю.Cтоимость: 2000 крон'
    },
    {
      id: 5, value: 'Авторский курс по произношению Основы произношения датского языка. Постановка основных звуков', label: 'Продолжительность: 9 недель, 3 урока в неделю.Cтоимость: 5000 крон'
    },
    {
      id: 6, value: 'Авторский курс по произношению Мелодия и интонация датского языка. Вишенка на торте', label: 'Продолжительность: 6 недель, 2 урока в неделю.Cтоимость: 3000 крон'
    }
  ]

  return (
    <div className='courses-modals'>
      <AppSelect
        optionItems={options}
      />
    </div>
  )
}

