import React from 'react'
import { About } from '../components/About'
import { MainForm } from '../components/MainForm'
import { Reviews } from '../components/Reviews'
import { Services } from '../components/Services'
import { Step } from '../components/Step'
import { TopLesson } from '../components/TopLesson'

export const MainPage = () => {

  return (
    <>
      <TopLesson />
      <About />
      <Services />
      <Step />
      <MainForm />
      <Reviews />
    </>
  )
}
