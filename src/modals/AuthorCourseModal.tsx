import React, { useState } from 'react';
import { Button } from '../components';
import '../styles/modals/author-course.scss';
import cn from 'classnames';
import { AppSelect } from '../components/UI/AppSelect';

interface AuthorCourseModalProps {
  onClick?: () => void
}

export const AuthorCourseModal = ({ onClick }: AuthorCourseModalProps): JSX.Element => {

  const [selectedOption, setIsSelectedOption] = useState(null);

  const options = [
    {
     id: 1, value: 'Авторский курс по произношению Основы произношения датского языка. Постановка основных звуков', label: 'ssss'
    },
    {
      id: 2, value: 'Авторский курс по произношению Основы произношения датского языка. Постановка основных звуков', label: 'aaaa'
    },
    {
      id: 3, value: 'Авторский курс по произношению Мелодия и интонация датского языка. Вишенка на торте', label: 'dddd'
    }
  ]
  return (
    <div className='author-course'>
      <AppSelect 
      optionItems={options}
      />
      <div className="author-course__btn">
        <Button
          border='md'
          borderColor='yellow'
          boxShadow='yellow'
        >Оплатить</Button>
      </div>
    </div>
  )
}

