import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Groups } from '../components/Groups';
import { Lessons } from '../components/Lessons';
import { NotFound } from '../components/NotFound';
import { Speaking } from '../components/Speaking';
import { Layout } from '../layout/Layout';
import { AboutPage } from '../pages/AboutPage';
import { ContactsPage } from '../pages/ContactsPage';
import { MainPage } from '../pages/MainPage';
import { PaymentPage } from '../pages/PaymentPage';
import { Questionary } from '../pages/Questionary';
import { ReviewsPage } from '../pages/ReviewsPage';
import { ServicesPage } from '../pages/ServicesPage';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='services' element={<ServicesPage />}>
          <Route path='lessons' element={<Lessons />} />
          <Route path='speaking' element={<Speaking />} />
          <Route path='groups' element={<Groups />} />
        </Route>
        <Route path='payment' element={<PaymentPage />} />
        <Route path='questionary' element={<Questionary />} />
        <Route path='contacts' element={<ContactsPage />} />
        <Route path='reviews' element={<ReviewsPage />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
