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
}

export const FillFormModal: React.FC<FillFormModalProps> = ({ toggleShow, show }) => {


  return (
    <div>
      <Dialog
        className='modals fill-form-modal'
        open={show!}
        onClose={toggleShow}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: '#fff',
            maxWidth: '660px',
            color: 'black',
            filter: "drop-shadow(2px 6px 10px rgba(0, 0, 0, 0.25))",
            borderRadius: '15px',
            border: '1px solid #c90c31'
          },
        }}
      >
        <DialogActions>
          <CloseButton onClose={toggleShow} />
        </DialogActions>
        <DialogContent
          style={{ maxWidth: '385px', textAlign: 'center' }}>
          <DialogContentText
            id="alert-dialog-description"
            className='modals fill-form-modal-text'
            style={{paddingTop: '15px', fontWeight: 700, fontSize: '16px', lineHeight: '150%', color: '#000' }}
          >
            Заполните нашу анкету на определение уровня владения языком и мы поможем подобрать вам обучающий курс
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{ justifyContent: 'center', marginBottom: '20px' }}
        >
          <NavLink className='fill-form-modal-link' to='/questionary' onClick={toggleShow}>
            заполнить анкету
          </NavLink>
        </DialogActions>
      </Dialog>
    </div>
  );
}
