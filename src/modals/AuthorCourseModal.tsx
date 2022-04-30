import React, { useState } from 'react';
import Select from 'react-select';
import { Button, Ptag } from '../components';
import '../styles/modals/author-course.scss';


interface AuthorCourseModalProps {
  onSubmit: () => void;
}
export const AuthorCourseModal = ({ onSubmit }: AuthorCourseModalProps) => {
  const [selectedOption, setSelectedOption] = useState<string | unknown>(null);

  const options = [
    { value: `Авторский курс по произношению "Основы произношения датского языка. Постановка основных звуков"`, label: 'Авторский курс по произношению "Основы произношения датского языка. Постановка основных звуков' },
    {
      value: `Авторский курс по произношению “Нюансы произношения датского языка. Фокус на
    гласные”`, label: `Авторский курс по произношению “Нюансы произношения датского языка. Фокус на
    гласные”`
    },
    { value: `Авторский курс по произношению “Мелодия и интонация датского языка. Вишенка на торте.”`, label: `Авторский курс по произношению “Мелодия и интонация датского языка. Вишенка на торте.”` },
  ];
  return (
    <div className='author-course'>
      <Select
        className='author-course__select'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
      <Ptag tag='md'>
        Продолжительность: 5 недель, 2 урока в неделю.
        <br />
        Cтоимость: 2000 крон
      </Ptag>
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
