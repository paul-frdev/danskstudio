import React from 'react';
import { CartList } from './CartList';
import { Htag } from './UI/Htag';
import { Ptag } from './UI/Ptag';
import { Tag } from './UI/Tag';
import '../styles/components/groups.scss';

export const Groups = () => {
  return (
    <section className='groups'>
      <div className="groups__container">
        <CartList className='groups__cart'>
          <Htag tag='h2'>1. Датский с нуля</Htag>
          <Ptag tag='md'>Занятия в мини-группе 4-5 человек.
          </Ptag>
          <Ptag tag='md'>Занятия проходят 1 раз в неделю; длительность занятия- 1 час 15 мин.
          </Ptag>
          <Ptag tag='md'>Занятия проходят на русском языке.</Ptag>

          <Tag size='xl'>Стоимость: 1000 крон/в месяц</Tag>
          <Tag size='xl'>Продолжительность курса с 0 до А2: 6 месяцев
          </Tag>
        </CartList>
        <CartList className='groups__cart'>
          <Htag tag='h2'>2. Коучинговая группа по постановке произношения</Htag>
          <Ptag tag='md'>Занятия в группе 3-5 человек, где я делаю фонетический анализ речи участников и мы работаем с
            точками роста группы.
            Предзапись.
          </Ptag>
          <Ptag tag='md'>
            10 занятий он-лайн в Zoom по 1,5 часа.
          </Ptag>
          <Ptag tag='md'>Подойдёт тем, кто учит через взаимодействие с другими и любит работать под руководством
            преподавателя.</Ptag>

          <Tag size='xl'>Cтоимость:  3000 крон</Tag>

        </CartList>
        <CartList className='groups__cart'>
          <Htag tag='h2'>3. Клуб интерактивного датского языка для продолжающих</Htag>
          <Ptag tag='md'>
            Занятия в мини-группе 4-5 человек.
          </Ptag>
          <Ptag tag='md'>
            4-5 занятий в месяц по 1,5 часа в формате он-лайн в Zoom.
          </Ptag>
          <Ptag tag='md'>Цель занятий: улучшить навыки устной речи; улучшить грамматику, произношение, расширить
            словарный запас, лучше узнать культуру страны.
          </Ptag>
          <Ptag tag='md'>
            Занятия тематические.
          </Ptag>
          <Ptag tag='md'>
            Уровень студентов от B2 и выше.
          </Ptag>
          <Ptag tag='md'>
            Занятия проходят на датском языке.
          </Ptag>
          <Tag size='xl'>Стоимость:  1000 крон/в месяц</Tag>
        </CartList>
        <CartList className='groups__cart'>
          <Htag tag='h2'>4. Киноклуб.</Htag>
          <Ptag tag='md'>
            Изучаем датский язык по фильмам.
          </Ptag>
          <Ptag tag='md'>
            4-5 занятий в месяц по 1,5 часа в формате он-лайн в Zoom.
          </Ptag>
          <Ptag tag='md'>
            Регулярные встречи, где обсуждаем просмотренные фильмы, делаем задания на тренировку
            лексики, грамматики, произношения,
          </Ptag>
          <Ptag tag='md'>
            тренируем навыки дискуссии на датском языке.
          </Ptag>
          <Ptag tag='md'>
            Регулярность встреч- 2 раза в месяц.
          </Ptag>
          <Ptag tag='md'>
            Продолжительность занятий- 1,5 часа.
          </Ptag>
          <Ptag tag='md'>
            Количество студентов в группе- 5-7 человек.
          </Ptag>
          <Ptag tag='md'>
            Уровень студентов- B2 и выше.
          </Ptag>

          <Tag size='xl'>
          Стоимость: 500 крон в месяц + материалы
            <span> (около 50 крон - месячный абонемент на платформу, где
              можно просматривать фильмы на датском языке
              легально.)
            </span>
          </Tag>
        </CartList>
      </div>
    </section>
  )
}
