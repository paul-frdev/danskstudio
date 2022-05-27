import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { groupsPrice, groupsTime, groupsTypes } from '../common/groups';
import { Button, Ptag } from '../components';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Grid } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import { CloseButton } from '../components/UI/CloseButton';

import '../styles/modals/courses-modals.scss';
interface GroupsCourseModalProps {
  show: boolean;
  toggleShow: () => void;
}
export const GroupsCourseModal = ({ show, toggleShow }: GroupsCourseModalProps) => {

  const [values, setValues] = React.useState({ groupName: '', time: '', price: '' });

  return (
    <>
      <Dialog
        className='modals'
        open={show}
        PaperProps={{
          style: {
            backgroundColor: '#fff',
            maxWidth: '1084px',
            minHeight: '150px',
            width: '100%',
            color: 'black',
            borderRadius: '20px',
            border: '4px solid #F4E8DA'
          },
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions>
          <CloseButton onClose={toggleShow} />
        </DialogActions>
        <DialogContent>
          <Box className='modals__wrapper'>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Выберите курс</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.groupName}
                label="Выберите курс"
                name='groupName'
                onChange={(event: SelectChangeEvent) => setValues({ ...values, groupName: event.target.value })}
              >
                {groupsTypes?.map(group => (
                  <MenuItem key={group.id} value={group.id}>{group.value}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ marginTop: '30px' }}>
              <InputLabel id="demo-simple-select-label">Выберите время</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.time}
                name='time'
                label="Выберите время"
                onChange={(event: SelectChangeEvent) => setValues({ ...values, time: event.target.value })}
              >
                {groupsTime?.map(group => (
                  <MenuItem key={group.id} value={group.id}>{group.value}</MenuItem>
                ))}
              </Select>
              <>
                {groupsTime &&
                  <Ptag tag='md' className='modals__text modals__text--pt' style={{ paddingTop: '30px' }}>Продолжительность: индивидуальное количество, уроки 60-70мин</Ptag>
                }
                <Ptag tag='md' className='modals__text'>
                  Стоимость:  <span style={{ color: 'red', fontWeight: '700' }}>{values.groupName === '' ? 'Выберете курс' : values.time === '' ? 'Выберете время' : ''}</span>
                  {values.groupName !== '' && values.time !== '' &&
                    groupsPrice.map(price => Number(values.groupName) === price.id && <span key={price.id}>{price.value} крон/ в месяц</span>)}
                </Ptag>
              </>
              <Grid display='flex' justifyContent='center' marginTop='20px'>
                <Button
                  border='md'
                  borderColor='yellow'
                  boxShadow='yellow'
                  onClick={toggleShow}
                  disabled={!values.groupName || !values.time}
                >Оплатить</Button>
              </Grid>
            </FormControl>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}
