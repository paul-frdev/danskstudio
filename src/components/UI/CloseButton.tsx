import React  from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CloseModalProps {
  onClose: () => void;
}
export const CloseButton = ({ onClose }: CloseModalProps) => {

  return (
    <>
      {onClose ? (
        <IconButton className='customized-button' onClick={onClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      ) : null}
    </>
  )
}