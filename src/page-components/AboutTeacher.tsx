import React from 'react'
import { MainTitle } from '../components/MainTitle';
import { AiOutlineCheck } from 'react-icons/ai';
import { Ptag } from '../components/UI/Ptag';
import { CartList } from '../components/CartList'
import { Htag } from '../components/UI/Htag';
import aboutMe from '../images/about-bg.jpg';
import '../styles/index.scss';

export const AboutTeacher = () => {
  return (
    <section className='about-teacher'>
      <MainTitle>О ПРЕПОДАВАТЕЛЕ ONLINE-ШКОЛЫ DANSK STUDIO</MainTitle>
      <div className="about-teacher__container">
        <div className="about-teacher__wrapper">
          <div>
            <CartList>
              <Htag tag='h3'>Oбразование</Htag>
              <div>
                <div >
                  <AiOutlineCheck />
                </div>
                <Ptag tag='md'>
                  МГПИ им. Н. К. Крупской, г. Йошкар-Ола, р-ка Марий- Эл, Россия. Факультет
                  иностранных языков. Английская филология.
                </Ptag>
                <div>
                  <AiOutlineCheck />
                </div>
                <Ptag tag='md'>
                  Sprogcenter Nordsjælland, Hillerød.
                </Ptag>
                <div>
                  <AiOutlineCheck />
                </div>
                <Ptag tag='md'>
                  University College Sjælland. Holbæk. (nu- Roskilde). Linjefag- Dansk. Dansk som
                  andetsprog.
                  Учительская семинария: датский язык и датский язык как второй для детей-билингвов в
                  общеобразовательных школах Дании.
                </Ptag>
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

            <CartList>
              <Htag tag='h2'>
                Курсы, семинары повышения квалификации:
              </Htag>
              <div>
                <span>1.</span>
                <Ptag tag='sm'>
                  Kursus i voksenpædagogik. University College Sjælland.
                </Ptag>
                <span>2.</span>
                <Ptag tag='sm'>
                  Kursus i voksenpædagogik. University College Sjælland.
                </Ptag>
                <span></span>
                <Ptag tag='sm'>
                  University College Sjælland. Holbæk. (nu- Roskilde). Linjefag- Dansk. Dansk som
                  andetsprog.
                  Учительская семинария: датский язык и датский язык как второй для детей-билингвов в
                  общеобразовательных школах Дании.
                </Ptag>
                <span>3.</span>
                <Ptag tag='sm'>
                  Smartboardkursus.
                </Ptag>
                <span>4.</span>
                <Ptag tag='sm'>
                  Kursus i blended learning.
                </Ptag>
                <span>5.</span>
                <Ptag tag='sm'>
                  Læsning på L1 (første sprog) og L 2 (andet sprog) ved Kirsten Andersen.
                </Ptag>
                <span>6.</span>
                <Ptag tag='sm'>
                  Taskbaseret undervisning. Hvordan arbejder vi med mundtlighed i danskundervisningen?
                  Ved Christina Helleshøj og Hanna Niemann.
                </Ptag>
                <span>7.</span>
                <Ptag tag='sm'>
                  Arbejdsmarkedsrettet dansk. Metoder til sproglæring ift temaet Det danske arbejdsmarked
                  og dansk arbejdskultur ved Bente Arildsen.
                </Ptag>
                <span>8.</span>
                <Ptag tag='sm'>
                  Thinking approach ved Aleksander Sokol og Elina Maslo.
                </Ptag>
                <span>9.</span>
                <Ptag tag='sm'>
                  Cooperative learning i DSA- undervisningen. (Pædagogisk weekend).
                </Ptag>
                <span>10.</span>
                <Ptag tag='sm'>
                  The flipped classroom ved David Jørgensen.
                </Ptag>
              </div>
            </CartList>
          </div>
          <img className='aboutme-img' src={aboutMe} alt="aboutMe" />
        </div>
      </div>
    </section>
  )
}
