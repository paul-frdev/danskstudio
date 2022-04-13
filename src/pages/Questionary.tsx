import React from 'react'
import { IquestionaryForm } from '../common/questionaryForm.interface'
import { Input } from '../components'
import { CartList } from '../components/CartList'
import { Ptag } from '../components/UI/Ptag'

export const Questionary = ({ goal, problem, level, study, languages, time, object, homework, file, name, email, phone, checkbox }: IquestionaryForm) => {
  return (
    <section className='questionary'>
      <div className="questionary__container">
        <form>
          <div>
            <Input
              type='text'
              name={goal}
              label='С какой целью вы учите или планируете изучать датский язык?'
            />

          </div>
          <div>
            <Input
              type='text'
              name={problem}
              label='Опишите  подробно свою языковую проблему. Чем я конкретно могу вам помочь?'
            />
          </div>
          <div>
            <Input
              type='text'
              name={level}
              label='Какой у вас уровень владения датским языком на данный момент?'
            />

          </div>
          <div>
            <Input
              type='text'
              name={time}
              label='Как долго вы изучаете датский язык?'
            />

          </div>
          <div>
            <Input
              type='text'
              name={study}
              label='Где вы раньше изучали датский- язык? (самостоятельно, языковая школа, с частным преподавателем)'
            />

          </div>
          <div>
            <Input
              type='text'
              name={languages}
              label='Какими иностранными языками владеете и на каком
            уровне?'
            />

          </div>
          <div>
            <Input
              type='text'
              name={object}
              label='Какой был любимый предмет в школе?'
            />

          </div>
          <div>
            <Input
              type='text'
              name={homework}
              label='Что вам даётся сложно при изучении датского языка или других иностранных языков?
            (общение с носителями, письмо, произношение, понимание иностранной речи на слух, и т.д.)'
            />

          </div>
          <div>
            <Input
              type='text'
              name={time}
              label='Сколько времени (сколько часов в неделю) вы  можете выделять на выполнение домашних заданий ?'
            />

          </div>

          <CartList>
            <Ptag tag='md'>
              Запишите свою речь в аудиосообщении или в видеосообщении (например, монолог о себе, чтение какого-либо текста),  запишите голосом сочинение на свободную тему.
            </Ptag>
            <Ptag tag='md'>
              Вы можете оставить этот пункт анкеты для личной консультации (наш специалист с вами свяжется).
            </Ptag>
            <Ptag tag='md'>
              Либо отправить сразу одним из вариантов:
            </Ptag>
            <Ptag tag='md'>
              1	Прикрепите файл <br />
              2	Вы можете отправить аудио- или видео- запись и отправить на почту olesyanikonova671@gmail.com<br />
              3	Можете отправить запись в мессенджер
              WhatsApp
              , Telegram
            </Ptag>
          </CartList>

          <div>
            <Input
              type='file'
              placeholder='Прикрепить файл'
            />

          </div>
          <div>
            <Input
              type='text'
              name={name}
              label='Ваше имя *'
            />

          </div>
          <div>
            <Input
              type='text'
              name={email}
              label='Ваш E-mail *'
            />

          </div>
          <div>
            <Input
              type='text'
              name={phone}
              label='Ваш номер телефона'
            />

          </div>
          <div>
            <Input
              type='checkbox'
              label='Я согласен на обработку персональных данных'
            />

          </div>
        </form>
      </div>
    </section>
  )
}
