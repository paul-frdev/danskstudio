import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { CloseButton } from '../components/UI/CloseButton';
import '../styles/modals/fill-form.scss';

interface FillFormModalProps {
  show: boolean;
  toggleShow: () => void;
  href?: string;
}

export const FillFormModal: React.FC<FillFormModalProps> = ({toggleShow, show, href }) => {


  return (
    <div>
      <Dialog
        className='modals fill-form-modal'
        open={show!}
        onClose={toggleShow}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions>
          <CloseButton onClose={toggleShow} />
        </DialogActions>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"  className='modals fill-form-modal-text'>
            Заполните нашу анкету на определение уровня владения языком и мы поможем подобрать вам обучающий курс
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <NavLink className='fill-form-modal-link' to='/questionary' onClick={toggleShow}>
            заполнить анкету
          </NavLink>
        </DialogActions>
      </Dialog>
    </div>
  );
}
