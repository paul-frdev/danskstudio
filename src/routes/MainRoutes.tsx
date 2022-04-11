import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from '../components/NotFound';
import { Layout } from '../layout/Layout';
import { AboutPage } from '../pages/AboutPage';
import { ContactsPage } from '../pages/ContactsPage';
import { EnrollPage } from '../pages/EnrollPage';
import { MainPage } from '../pages/MainPage';
import { PaymentPage } from '../pages/PaymentPage';
import { ReviewsPage } from '../pages/ReviewsPage';
import { ServicesPage } from '../pages/ServicesPage';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/enroll' element={<EnrollPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/reviews' element={<ReviewsPage />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
