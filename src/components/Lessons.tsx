import React, { useState } from 'react';
import { CartList } from './CartList';
import { Htag } from './UI/Htag';
import { Ptag } from './UI/Ptag';

import '../styles/components/lessons.scss';
import { Button } from './UI/Button';
import { SpecialCourseModal } from '../modals/SpecialCourseModal';

export const Lessons = () => {
  
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(prev => !prev);

  return (
    <section className='lessons'>
      <div className="lessons__container">
        <CartList className="lessons__cart">
          <Htag tag='h2'>Занятия под индивидуальный запрос, </Htag>
          <Ptag tag='md'>например, постановка произношения, подготовка к
            экзаменам, языковой коучинг и другие языковые потребности.
          </Ptag>
          <Ptag tag='md'>Занятие 60-70мин</Ptag>
        </CartList>
        <CartList className="lessons__cart">
          <Ptag tag='md'>Стоимость:</Ptag>
          <Ptag tag='md'>В будние дни 10.00- 15.00 - 600 крон за 1 занятие
          </Ptag>
          <Ptag tag='md'>В будние дни 16.00- 20.00 - 800 крон за 1 занятие
          </Ptag>
          <Ptag tag='md'>В выходные дни 9.00-12.00 - 800 крон за 1 занятие</Ptag>
        </CartList>
        <div className="lessons__btns">
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
            <SpecialCourseModal show={show} toggleShow={toggleShow}/>
        </div>
      </div>
    </section>
  )
}
