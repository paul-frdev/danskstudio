import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { groupsTime, groupsTypes } from '../common/groups';
import { Ptag } from '../components';

export const GroupsCourseModal = () => {

  const [values, setValues] = React.useState({ groupName: '', time: '' });

  console.log(values.groupName);

  const handleChange = (event: SelectChangeEvent) => {

  }

  return (
    <div className='special-course'>
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
              <InputLabel id="demo-simple-select-label">Выберите курс</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.time}
                name='time'
                label="Выберите курс"
                onChange={(event: SelectChangeEvent) => setValues({ ...values, time: event.target.value })}
              >
                {groupsTime?.map(group => (
                  <MenuItem key={group.id} value={group.id}>{group.value}</MenuItem>
                ))}
              </Select>
              <>
                {groupsTime &&
                  <Ptag tag='md'>Продолжительность: индивидуальное количество, уроки 60-70мин</Ptag>
                   
                }
              </>
            </FormControl>
          }
        </Box>
      </div>
    </div>
  )
}
