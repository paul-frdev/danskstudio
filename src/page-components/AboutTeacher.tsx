import React, { useEffect, useState } from 'react'
import { MainTitle } from '../components/MainTitle';
import { AiOutlineCheck } from 'react-icons/ai';
import { Ptag } from '../components/UI/Ptag';
import { CartList } from '../components/CartList'
import { Htag } from '../components/UI/Htag';
import aboutMe from '../images/about-bg.jpg';
import '../styles/index.scss';
import { Button } from '../components';
import useWindowDimensions from '../hooks/useWindowDimensions';

export const AboutTeacher = () => {

  const { height, width } = useWindowDimensions();

  return (
    <section className='about-teacher'>
      {width < 1020 ? <MainTitle className='about-teacher__title'>О ПРЕПОДАВАТЕЛЕ ONLINE-ШКОЛЫ <br /> DANSK STUDIO</MainTitle>
        :
        <MainTitle>О ПРЕПОДАВАТЕЛЕ ONLINE-ШКОЛЫ DANSK STUDIO</MainTitle>
      }
      <div className="about-teacher__container">
        <div className="about-teacher__wrapper">
          <div>
            <CartList className='about-teacher__list'>
              <Htag className='about-teacher__list-title' tag='h3'>Oбразование</Htag>
              <div className='list-block'>
                <div>
                  <AiOutlineCheck />
                </div>
                <Ptag tag='md'>
                  МГПИ им. Н. К. Крупской, г. Йошкар-Ола, р-ка Марий- Эл, Россия. Факультет
                  иностранных языков. Английская филология.
                </Ptag>
              </div>
              <div className='list-block'>
                <div>
                  <AiOutlineCheck />
                </div>
                <Ptag tag='md'>
                  Sprogcenter Nordsjælland, Hillerød.
                </Ptag>
              </div>
              <div className='list-block'>
                <div>
                  <AiOutlineCheck />
                </div>
                <Ptag tag='md'>
                  University College Sjælland. Holbæk. (nu- Roskilde). Linjefag- Dansk. Dansk som
                  andetsprog.
                  Учительская семинария: датский язык и датский язык как второй для детей-билингвов в
                  общеобразовательных школах Дании.
                </Ptag>
              </div>
              <div className='list-block'>
                <div>
                  <AiOutlineCheck />
                </div>
                <Ptag tag='md'>
                  Датский педагогический университет по специальности преподаватель датского
                  языка взрослым иностранцам.
                  DPU, Århus Universitet, København. Uddannelsen til underviser i dansk som andet-og
                  fremmedsprog til voksne og unge.
                  Дипломную работу по теме произношение датского языка сдала на высший бал (12).
                </Ptag>
              </div>
            </CartList>

            <CartList className='about-teacher__list'>
              <Htag className='about-teacher__list-title' tag='h2'>
                Курсы, семинары повышения квалификации:
              </Htag>
              <div className='list-block list-block--second'>
                <span>1.</span>
                <Ptag tag='md'>
                  Kursus i voksenpædagogik. University College Sjælland.
                </Ptag>
              </div>
              <div className='list-block list-block--second'>
                <span>2.</span>
                <Ptag tag='md'>
                  Kursus i voksenpædagogik. University College Sjælland.
                </Ptag>
              </div>
              <div className='list-block list-block--second'>
                <span>3.</span>
                <Ptag tag='md'>
                  Smartboardkursus.
                </Ptag>
              </div>
              <div className='list-block list-block--second'>
                <span>4.</span>
                <Ptag tag='md'>
                  Kursus i blended learning.
                </Ptag>
              </div>
              <div className='list-block list-block--second'>
                <span>5.</span>
                <Ptag tag='md'>
                  Læsning på L1 (første sprog) og L 2 (andet sprog) ved Kirsten Andersen.
                </Ptag>
              </div>
              <div className='list-block list-block--second'>
                <span>6.</span>
                <Ptag tag='md'>
                  Taskbaseret undervisning. Hvordan arbejder vi med mundtlighed i danskundervisningen?
                  Ved Christina Helleshøj og Hanna Niemann.
                </Ptag>
              </div>
              <div className='list-block list-block--second'>
                <span>7.</span>
                <Ptag tag='md'>
                  Arbejdsmarkedsrettet dansk. Metoder til sproglæring ift temaet Det danske arbejdsmarked
                  og dansk arbejdskultur ved Bente Arildsen.
                </Ptag>
              </div>
              <div className='list-block list-block--second'>
                <span>8.</span>
                <Ptag tag='md'>
                  Thinking approach ved Aleksander Sokol og Elina Maslo.
                </Ptag>
              </div>
              <div className='list-block list-block--second'>
                <span>9.</span>
                <Ptag tag='md'>
                  Cooperative learning i DSA- undervisningen. (Pædagogisk weekend).
                </Ptag>
              </div>
              <div className='list-block list-block--second'>
                <span>10.</span>
                <Ptag tag='md'>
                  The flipped classroom ved David Jørgensen.
                </Ptag>
              </div>

            </CartList>
          </div>
          <img className='aboutme-img' src={aboutMe} alt="aboutMe" />
        </div>
        <CartList className='about-teacher__list'>
          <Htag className='about-teacher__list-title' tag='h3'>Деятельность</Htag>
          <div className='list-block'>
            <div>
              <AiOutlineCheck />
            </div>
            <Ptag tag='md'>
              первый преподавательский опыт получила будучи школьницей, в 15 лет- готовила к
              школе свою младшую сестру и давала частные уроки по английскому языку младшим
              школьникам по рекомендациям знакомых.
            </Ptag>
          </div>
          <div className='list-block'>
            <div>
              <AiOutlineCheck />
            </div>
            <Ptag tag='md'>
              частный репетитор английского языка для детей школьного и дошкольного возраста;
            </Ptag>
          </div>
          <div className='list-block'>
            <div>
              <AiOutlineCheck />
            </div>
            <Ptag tag='md'>
              учитель английского языка в школе-интернате республиканского значения;
            </Ptag>
          </div>
          <div className='list-block'>
            <div>
              <AiOutlineCheck />
            </div>
            <Ptag tag='md'>
              устный и письменный переводчик, английский-русский языки- фриланс.
            </Ptag>
          </div>
          <div className='list-block'>
            <div>
              <AiOutlineCheck />
            </div>
            <Ptag tag='md'>
              преподаватель датского языка в языковых школах Дании, главным образом в г.
              Holbæk; также есть опыт работы в других языковых школах- Clavis, Næstved, Каlundborg.
              <span>За время работы в языковых школах я помогла с изучением датского языка огромному
                количеству студентов. B мои обязанности входило следующее- преподавание датского
                языка на различных уровнях- DU1, DU2, DU3, тестирование студентов, подготовка к
                тестам, экзаменам.
              </span>
              <span>
                L ø n r a m m e / t r i n- 42, высшая категория.
              </span>
            </Ptag>
          </div>
          <div className='list-block'>
            <div>
              <AiOutlineCheck />
            </div>
            <Ptag tag='md'>
              специалист по изучению датского языка для детей-билингвов в
              общеобразовательных школах коммуны Holbæk.
            </Ptag>
          </div>
          <div className='list-block'>
            <div>
              <AiOutlineCheck />
            </div>
            <Ptag tag='md'>
              автор курсов и проектов по изучению датского языка.
            </Ptag>
          </div>
        </CartList>
        <div className="about-teacher__btns">
          <Button
            background='yellow'
            borderColor='yellow'
            border='sm'
            href='/'
          >анкета для определения уровня</Button>
          <Button
            border='md'
            borderColor='yellow'
            boxShadow='yellow'
            href='/'
          >Записаться на пробный ONLINE урок</Button>
        </div>
      </div>
    </section>
  )
}
