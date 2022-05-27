import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { CloseButton } from '../components/UI/CloseButton';
import '../styles/modals/fill-form.scss';

export const FillFormModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions>
          <CloseButton onClose={handleClose} />
        </DialogActions>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Заполните нашу анкету на определение уровня владения языком и мы поможем подобрать вам обучающий курс
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <NavLink to='/' onClick={handleClose}>
            заполнить анкету
          </NavLink>
        </DialogActions>
      </Dialog>
    </div>
  );
}
