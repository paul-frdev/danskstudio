import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { groupsPrice, groupsTime, groupsTypes } from '../common/groups';
import { Button, Ptag } from '../components';

export const GroupsCourseModal = () => {

  const [values, setValues] = React.useState({ groupName: '', time: '', price: '' });

  const handleClick = () => {

  }

  return (
      <div className='courses-modals'>
        <Box sx={{ minWidth: 120 }}>
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
          {values.groupName !== '' &&
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
                  <Ptag tag='md' className='courses-modals__text courses-modals__text--pt' style={{ paddingTop: '30px' }}>Продолжительность: индивидуальное количество, уроки 60-70мин</Ptag>
                }
                <Ptag tag='md' className='courses-modals__text'>
                  Стоимость: {values.time === '' && <span style={{ color: 'red', fontWeight: '700' }}>Выберете время</span>}
                  {values.groupName !== '' && values.time !== '' &&
                    groupsPrice.map(price => Number(values.groupName) === price.id && <span key={price.id}>{price.value} крон/ в месяц</span>)}
                </Ptag>
              </>
              {values.groupName !== '' && values.time !== '' &&
                <div className="courses-modals__btn">
                  <Button
                    border='md'
                    borderColor='yellow'
                    boxShadow='yellow'
                    onClick={handleClick}
                  >Оплатить</Button>
                </div>
              }
            </FormControl>
          }
        </Box>
      </div>
  )
}
