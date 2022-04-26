import React from 'react'
import { IquestionaryForm } from '../common/questionaryForm.interface'
import { Button, Input } from '../components'
import { CartList } from '../components/CartList'
import { MainTitle } from '../components/MainTitle'
import { Ptag } from '../components/UI/Ptag'
import { SubmitHandler, useForm } from 'react-hook-form';
import useWindowDimensions from '../hooks/useWindowDimensions'
import '../styles/page-components/questionary.scss';

export const Questionary = ({ goal, problem, level, study, languages, time, object, homework, file, name, email, phone, checkbox }: IquestionaryForm) => {

  const { height, width } = useWindowDimensions();
  const { register, handleSubmit, formState: { errors } } = useForm<IquestionaryForm>();
  const onSubmit = (data: IquestionaryForm) => console.log(data);

  return (
    <section className='questionary'>
      {width < 640 ? <MainTitle className='questionary__title'>Анкета <br /> перед началом занятий</MainTitle>
        :
        <MainTitle>Анкета перед началом занятий</MainTitle>
      }

      <div className="questionary__container">
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <Input
            type='text'
            name={goal}
            label='С какой целью вы учите или планируете изучать датский язык?'
          />
          <Input
            type='text'
            name={problem}
            label='Опишите  подробно свою языковую проблему. Чем я конкретно могу вам помочь?'
          />

          <Input
            type='text'
            name={level}
            label='Какой у вас уровень владения датским языком на данный момент?'
          />
          <Input
            type='text'
            name={time}
            label='Как долго вы изучаете датский язык?'
          />
          <Input
            type='text'
            name={study}
            label='Где вы раньше изучали датский- язык? (самостоятельно, языковая школа, с частным преподавателем)'
          />
          <Input
            type='text'
            name={languages}
            label='Какими иностранными языками владеете и на каком
            уровне?'
          />
          <Input
            type='text'
            name={object}
            label='Какой был любимый предмет в школе?'
          />
          <Input
            type='text'
            name={homework}
            label='Что вам даётся сложно при изучении датского языка или других иностранных языков?
            (общение с носителями, письмо, произношение, понимание иностранной речи на слух, и т.д.)'
          />
          <Input
            type='text'
            name={time}
            label='Сколько времени (сколько часов в неделю) вы  можете выделять на выполнение домашних заданий ?'
          />

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
          <Input
            type='file'
            placeholder='Прикрепить файл'
          />
          <Input
            type='text'
            label='Ваше имя *'
            error={errors.name}
            {...register("name", { required: { value: true, message: 'Введите ваше имя' } })}
          />
          <Input
            type='text'
            label='Ваш E-mail *'
            error={errors.email}
            {...register("email", { required: { value: true, message: 'Введите ваш email' } })}
          />
          <Input
            type='text'
            label='Ваш номер телефона'
            error={errors.phone}
            {...register("phone", { required: { value: true, message: 'Введите ваш телефон' } })}
          />
          <div className="checkbox">
            <Input
              className='input-checkbox'
              type='checkbox'
              label='Я согласен на обработку персональных данных'
              error={errors.checkbox}
              {...register("checkbox", { required: { value: true, message: 'checkbox' } })}
            />
          </div>
          <div className='button'>
            <Button
              borderColor='yellow'
              border='md'
              boxShadow='yellow'
            >Отправить</Button>
          </div>
        </form>
        <Ptag className='form-text' tag='md'>Спасибо! Мы скоро с вами свяжемся и предложим лучшую программу в соответствии с вашим уровнем владения языка</Ptag>
      </div>
    </section>
  )
}
