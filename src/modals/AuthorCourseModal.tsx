import React, { useState } from 'react';
import { Button, Ptag } from '../components';
import '../styles/modals/author-course.scss';
import cn from 'classnames';
import { AppSelect } from '../components/UI/AppSelect';

interface AuthorCourseModalProps {
  onClick?: () => void
}

export const AuthorCourseModal = ({ onClick }: AuthorCourseModalProps): JSX.Element => {

  const [selectedOption, setIsSelectedOption] = useState('');

  const options = [
    {
      id: 1, value: 'Авторский курс по произношению Основы произношения датского языка. Постановка основных звуков', label: 'Продолжительность: 5 недель, 2 урока в неделю.Cтоимость: 2000 крон'
    },
    {
      id: 2, value: 'Авторский курс по произношению Основы произношения датского языка. Постановка основных звуков', label: 'Продолжительность: 9 недель, 3 урока в неделю.Cтоимость: 5000 крон'
    },
    {
      id: 3, value: 'Авторский курс по произношению Мелодия и интонация датского языка. Вишенка на торте', label: 'Продолжительность: 6 недель, 2 урока в неделю.Cтоимость: 3000 крон'
    }
  ]

  return (
    <div  className='author-course'>
      <AppSelect
        optionItems={options}
        onFocus={(value: string) => setIsSelectedOption(value)}
      />
    </div>
  )
}

