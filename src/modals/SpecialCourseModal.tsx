import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { optionsTimeSpecialGroupDays, optionsSpecials, optionsTimeSpecialGroupPrice } from '../common/groups';
import { Button, Ptag } from '../components';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Grid } from '@mui/material';
import '../styles/modals/courses-modals.scss';

interface SpecialCourseModalProps {
  show: boolean;
  toggleShow: () => void;
}
export const SpecialCourseModal = ({ show, toggleShow }: SpecialCourseModalProps) => {

  const [values, setValues] = React.useState({ groupName: '', time: '', price: '' });

  console.log(values);
  
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
                {optionsSpecials?.map(group => (
                  <MenuItem key={group.id} value={group.id}>{group.value}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{
              marginTop: '30px'
            }}>
              <InputLabel id="demo-simple-select-label">Выберете время</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.time}
                label="Выберете время"
                onChange={(event: SelectChangeEvent) => setValues({ ...values, time: event.target.value })}
              >
                {optionsTimeSpecialGroupDays?.map(optionPrice => (
                  <MenuItem key={optionPrice.id} value={optionPrice.id}>{optionPrice.value}</MenuItem>
                ))}
              </Select>
              <Ptag tag='md' className='modals__text modals__text--pt' style={{ paddingTop: '30px' }}>Продолжительность: 5 недель, 2 урока в неделю.</Ptag>
              <div className='modals__text'>
                Стоимость: {values.time === '' && <span style={{ color: 'red', fontWeight: '700' }}>Выберете время</span>}
                <>
                  {values.time !== '' &&
                    optionsTimeSpecialGroupPrice.map(price => Number(values.time) === price.id &&
                      <span key={price.id} onChange={(event: any) => setValues({...values, price: price.value})}>
                        {price.value} крон/ в месяц
                      </span>)
                  }
                </>
              </div>
              <Grid display='flex' justifyContent='center' marginTop='20px'>
                <Button
                  border='md'
                  borderColor='yellow'
                  boxShadow='yellow'
                  disabled={!values.groupName || !values.time}
                  onClick={toggleShow}
                >Оплатить</Button>
              </Grid>
            </FormControl>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}
