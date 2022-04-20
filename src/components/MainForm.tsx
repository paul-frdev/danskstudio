import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { MainTitle } from './MainTitle'
import { Button } from './UI/Button';
import { Input } from './UI/Input';
import { Ptag } from './UI/Ptag'
import { Tag } from './UI/Tag';


interface IFormInput {
  firstName: string;
  phone: number;
  email: string;
  skype: string;
}

export const MainForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <section className='form'>
      <div>
        <MainTitle className='form__title' title='after' position='left'>
          <span>Узнать расписание</span>
        </MainTitle>
      </div>
      <div className="form__container">
        <Ptag className="form__text" tag='md'>Перед оплатой курса узнайте, есть ли места в группе, не возникло ли переноса или отмены занятий</Ptag>
        <form
          className='main-form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="main-form__wrapper">
            <div className="input-block">
              <Input
                label='Ваше имя*'
                type='text'
                error={errors.firstName}
                {...register("firstName", { required: { value: true, message: 'Введите ваше имя' } })}
              />
            </div>
            <div className="input-block">
              <Input
                label='Ваш телефон*'
                type='number'
                {...register("phone", { required: { value: true, message: 'Введите ваш номер телефона' } })}
                error={errors.phone}
              />
            </div>
            <div className="input-block">
              <Input
                label='Ваш email*'
                {...register("email", { required: { value: true, message: 'Введите ваш email адресс' } })}
                type='email'
                error={errors.email}
              />
            </div>
            <div className="input-block">
              <Input
                label='Ваш Skype*'
                {...register("skype", { required: { value: true, message: 'Введите ваш skype' } })}
                type='text'
                error={errors.skype}
              />
            </div>
          </div>
          <div className='main-form__block'>
            <Tag className='main-form__text' size='sm'>* Поля, отмеченные звездочкой, являются
              обязательными для заполнения
            </Tag>
            <Tag className='main-form__text' size='sm'>Нажимая кнопку, вы даете согласие на обработку
              своих персональных данных
            </Tag>
            <Button
              className='main-form__btn'
              borderColor='yellow'
              border='sm'
              boxShadow='yellow'
            >
              Отправить
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
