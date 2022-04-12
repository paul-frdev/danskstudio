import React from 'react';
import '../styles/index.scss';
import about from '../images/about.png';
import { CartList } from './CartList';
import { Htag } from './UI/Htag';
import { Ptag } from './UI/Ptag';
import { BsChevronRight } from 'react-icons/bs'
import { AiOutlineCheck } from 'react-icons/ai';
import { Tag } from './UI/Tag';
import { MainTitle } from './MainTitle';

export const About = () => {
  return (
    <section className='about'>
      <MainTitle title='before'>
        <span>Обо мне</span>
      </MainTitle>
      <div className="about__container">
        <div className="about__img" >
          <img src={about} alt="about" />
          <p className='about__img-text'>основатель школы</p>
        </div>
        <div>
          <Ptag tag='md' className='about__text'>
            Рада приветствовать всех небезразличных к иностранным языкам!
            Меня зовут Олеся, и я - квалифицированный преподаватель датского языка.
          </Ptag>
          <Ptag tag='md' className='about__text'>
            Я очень люблю изучать и преподавать иностранные языки. Датский язык я начала изучать в Дании уже будучи взрослой, а вообще, языки я изучаю сколько себя помню, а преподаю с 15 лет.  Живу в Дании с 2007 и с 2010 начала работать в языковых школах и преподавать датский язык взрослым иностранцам из разных уголков мира.
          </Ptag>
          <Ptag tag='md' className='about__text'>
            Последние 2 года я развиваю свой авторский проект "Dansk studio", создала несколько авторских курсов (по произношению, грамматике) и планирую  реализовать ещё несколько творческих идей, которые помогут многим изучающим датский язык.
          </Ptag>
          <CartList border='border-md' className='about__cart'>
            <Htag tag='h2' className='about__subtitle'>о моём образовании</Htag>
            <div className='about__cart-block'>
              <div>
                <AiOutlineCheck />
              </div>
              <Ptag tag='sm'><span>МГПИ им. Н. К. Крупской</span> г. Йошкар-Ола, р-ка Марий- Эл, Россия. Факультет иностранных языков. Английская филология.</Ptag>
            </div>
            <div className='about__cart-block'>
              <AiOutlineCheck />
              <Ptag tag='sm'><span>Sprogcenter Nordsjælland</span>, Hillerød.</Ptag>
            </div>
            <div className='about__cart-block'>
              <div>
                <AiOutlineCheck />
              </div>
              <div>
                <Ptag tag='sm'><span>University College Sjælland</span></Ptag>
                <Ptag tag='sm'>Учительская семинария: датский язык и датский язык как второй для детей-билингвов в общеобразовательных школах Дании.</Ptag>
              </div>
            </div>
            <div className='about__cart-block'>
              <div>
                <AiOutlineCheck />
              </div>
              <div>
                <Ptag tag='sm'><span>Датский педагогический университет по специальности преподаватель датского языка взрослым иностранцам.
                </span>DPU, Århus Universitet, København. Uddannelsen til underviser i dansk som andet-og fremmedsprog til voksne og unge.
                </Ptag>
                <Ptag tag='sm'>Дипломную работу по теме произношение датского языка сдала на высший бал (12).</Ptag>
              </div>
            </div>
            <Tag href='/about' size='md' className='about__link'>
              О повышении квалификации и моей деятельности
              <BsChevronRight />
            </Tag>
          </CartList>
        </div>
      </div>
    </section>
  )
}
