import React, { useEffect, useState } from 'react'
import { About } from '../components/About'
import { MainForm } from '../components/MainForm'
import { Reviews } from '../components/Reviews'
import { Services } from '../components/Services'
import { Step } from '../components/Step'
import { TopLesson } from '../components/TopLesson'
import { FillFormModal } from '../modals/FillFormModal'

export const MainPage = () => {

  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(prev => !prev);

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 10000)

    return () => clearTimeout()
  }, [setShow]);


  return (
    <>
      <TopLesson />
      <About />
      <Services />
      <Step />
      <MainForm />
      <Reviews />
      <FillFormModal show={show} toggleShow={toggleShow} />
    </>
  )
}
