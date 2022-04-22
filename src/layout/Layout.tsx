import React from 'react'
import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';

import '../styles/layout/layout.scss';

export const Layout = (): JSX.Element => {
  return (
    <div className='layout'>
      <Header className='layout__header'/>
      <main className='layout__body'>
        <Outlet />
      </main>
      <Footer className='layout__footer'/>
    </div>
  )
}
