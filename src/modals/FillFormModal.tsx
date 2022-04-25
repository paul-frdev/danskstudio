import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/modals/fill-form.scss';

interface FillFormModalProps {
  to?: string;
  showModal?: () => void;
}
export const FillFormModal = ({ to, showModal }: FillFormModalProps) => {
  return (
    <div className='fill-form'>
      <NavLink to='questionary'>Заполните анкету</NavLink>
    </div>
  )
}
