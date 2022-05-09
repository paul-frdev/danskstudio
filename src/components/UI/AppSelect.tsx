import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from '../../components/UI/Button';
import { Ptag } from './Ptag';
import '../../styles/UI/app-select.scss';

interface BaseOption {
  id: number;
  value: string;
  label?: string
}

interface AppSelectProps {
  optionItems?: BaseOption[];
  optionCuorse?: BaseOption[];
  optionsTime?: BaseOption[];
  onFocus?: (value: string) => void;
}

export const AppSelect = ({ optionCuorse, optionItems, optionsTime, onFocus }: AppSelectProps) => {
  const [optionSelected, setOptionSelected] = useState('');
  const [optionSelectedTime, setOptionSelectedTime] = useState('');
  const [isShown, setIsShown] = useState(true);

  console.log(optionsTime);

  const handleChange = (event: SelectChangeEvent) => {
    setOptionSelected(event.target.value);
  };

  const handleTimeChange = (event: SelectChangeEvent) => {
    setOptionSelectedTime(event.target.value)
  }

  const handleClick = (event: any) => {
    event.preventDefault();
    setIsShown(false)
  }

  return (
    <Box sx={{ minWidth: 120 }} className='app-select'>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Выберете курс</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={optionSelected}
          label="Выберете курс"
          onChange={handleChange}
        >
          {optionItems ? optionItems?.map(option => (
            <MenuItem key={option.id} value={option.id}>{option.value}</MenuItem>
          ))
            :
            optionCuorse?.map(option => (
              <MenuItem key={option.id} value={option.id}>{option.value}</MenuItem>
            ))
          }
        </Select>
        <>
          {optionSelected && optionItems?.map(option => Number(optionSelected) === option.id && <Ptag key={option.id} className='app-select__text' tag="md">{option.label}</Ptag>)}
        </>
        {optionsTime ? null :
          <div className="courses-modals__btn">
            <Button
              border='md'
              borderColor='yellow'
              boxShadow='yellow'
              onClick={handleClick}
            >Оплатить</Button>
          </div>}
      </FormControl>
      {optionsTime && optionSelected &&
        <FormControl fullWidth sx={{
          marginTop: '30px'
        }}>
          <InputLabel id="demo-simple-select-label">Выберете время</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={optionSelectedTime}
            label="Выберете время"
            onChange={handleTimeChange}
          >
            {optionsTime?.map(option => (
              <MenuItem key={option.id} value={option.id}>{option.value}</MenuItem>
            ))}
          </Select>
          <>
            {optionsTime &&
              optionsTime?.map(option => Number(optionSelectedTime) === option.id && <Ptag key={option.id} className='app-select__text' tag="md">{option.label}</Ptag>)
            }
          </>
          {optionsTime &&
            <div className="courses-modals__btn">
              <Button
                border='md'
                borderColor='yellow'
                boxShadow='yellow'
                onClick={handleClick}
              >Оплатить</Button>
            </div>}
        </FormControl>
      }
    </Box>
  );
}

