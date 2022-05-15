import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { optionsAuthor, optionsAuthorPrice } from '../common/groups';
import { Button, Ptag } from '../components';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Grid } from '@mui/material';
import '../styles/modals/courses-modals.scss';

interface AuthorCourseModalProps {
  show: boolean;
  toggleShow: () => void;
}

export const AuthorCourseModal = ({ show, toggleShow }: AuthorCourseModalProps): JSX.Element => {
  const [values, setValues] = React.useState({ groupName: '', price: '' });

  return (
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
              {optionsAuthor?.map(group => (
                <MenuItem key={group.id} value={group.id}>{group.value}</MenuItem>
              ))}
            </Select>
            <Ptag
              tag='md'
              className='modals__text modals__text--pt'
              style={{ paddingTop: '30px' }}
            >
              Продолжительность: 5 недель, 2 урока в неделю.
            </Ptag>
            <Ptag tag='md' className='modals__text'>
              Стоимость: {values.groupName === '' && <span style={{ color: 'red', fontWeight: '700' }}>Выберете курс</span>}
              {values.groupName !== '' &&
                optionsAuthorPrice.map(price => Number(values.groupName) === price.id && <span key={price.id}>{price.label} крон/ в месяц</span>)
              }
            </Ptag>
            <Grid display='flex' justifyContent='center' marginTop='20px'>
              <Button
                border='md'
                borderColor='yellow'
                boxShadow='yellow'
                onClick={toggleShow}
                disabled={!values.groupName}
              >Оплатить</Button>
            </Grid>
          </FormControl>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

