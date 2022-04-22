import React from 'react'
import { CartList } from '../components/CartList'
import { MainTitle } from '../components/MainTitle'
import { Htag } from '../components/UI/Htag'
import { Ptag } from '../components/UI/Ptag'
import useWindowDimensions from '../hooks/useWindowDimensions'

export const Payment = () => {

  const { height, width } = useWindowDimensions();

  return (
    <section className='payment'>
      {width < 560 ? <MainTitle className='payment__title'>Участие и оплата</MainTitle>
        :
        <MainTitle>Условия участия и оплата</MainTitle>
      }
      <div className="payment__container">
        <CartList className='payment__cart'>
          <Htag tag='h3'>
            Оплата обучения
          </Htag>
          <Ptag tag='md'>
            Обучаясь в школе Dansk Studio, оплачивать занятия вы можете:
          </Ptag>
          <Ptag tag='md'>
            -как физическое лицо в офисе или online;
          </Ptag>
          <Ptag tag='md'>
            -компания за вас по безналичному расчету;
          </Ptag>
          <Ptag tag='md'>
            -в рамках корпоративного обучения.
          </Ptag>
          <Ptag tag='md'>
            Оплатить обучение в школе можно картой Mastercard или Visa онлайн, либо через сервисы PayPal, ApplePay.
          </Ptag>
          <Ptag tag='md'>
            Осуществить платеж за очередной семестр можно не ранее, чем за 20 дней до окончания предыдущего оплаченного периода.
          </Ptag>
          <Ptag tag='md'>
            После осуществленного платежа информация об оплате семестра в течение часа поступает в базу данных школы. Во избежание спорных ситуаций, пожалуйста, сохраняйте чек, который вы сможете предъявить вашему преподавателю при необходимости.
          </Ptag>
          <Ptag tag='md'>
            Перед осуществлением оплаты, стоимость обучения можно уточнить по телефону у наших специалистов по работе с клиентами.
          </Ptag>
          <Ptag tag='md'>
            Важную информацию о порядке оплаты обучения, первом пробном занятии, компенсациях за пропуски и др. смотрите здесь.
          </Ptag>
        </CartList>
      </div>
    </section>
  )
}
