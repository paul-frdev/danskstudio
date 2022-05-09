import React from 'react'
import { AppSelect } from '../components/UI/AppSelect'

export const SpecialCourseModal = () => {
  const options = [
    {
      id: 1, value: 'ПОДГОТОВКА К ЭКЗАМЕНАМ'
    },
    {
      id: 2, value: 'ПОСТАНОВКА ПРОИЗНОШЕНИЯ'
    },
    {
      id: 3, value: 'ЯЗЫКОВОЙ КОУЧИНГ'
    },
    {
      id: 4, value: 'ДРУГОЕ'
    },
  ]

  const optionsTime = [
    {
      id: 1, value: 'В будние дни 10.00- 15.00', label: `Продолжительность: индивидуальное количество, уроки 60-70мин  Cтоимость: 600 крон
      за занятие`
    },
    {
      id: 2, value: 'В будние дни 16.00- 20.00 ', label: `Продолжительность: индивидуальное количество, уроки 60-70мин  Cтоимость: 800 крон
      за занятие`
    },
    {
      id: 3, value: 'В выходные дни 9.00-12.00', label: `Продолжительность: индивидуальное количество, уроки 60-70мин Cтоимость: 900 крон
      за занятие`
    }
  ]
  return (
    <div className='special-course'>
      <div className='courses-modals'>
        <AppSelect
          optionCuorse={options}
          optionsTime={optionsTime}
        />
      </div>
    </div>
  )
}
