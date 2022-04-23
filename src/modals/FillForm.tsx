import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/modals/fill-form.scss';

export const FillForm = () => {
    return (
        <div className='fill-form'>
             <NavLink to='/about'>Заполните анкету</NavLink>
        </div>
    )
}
