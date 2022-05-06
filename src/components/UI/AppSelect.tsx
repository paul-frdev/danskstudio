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
  label: string
}

interface AppSelectProps {
  optionItems?: BaseOption[];
  onFocus: (value: string) => void;
}

export const AppSelect = ({ optionItems, onFocus }: AppSelectProps) => {
  const [optionSelected, setOptionSelected] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setOptionSelected(event.target.value);
  };

  const handleClick = (event: any) => {
    event.preventDefault();
  }

  const handleFocus = () => {
    onFocus(optionSelected)
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
          onFocus={handleFocus}
        >
          {optionItems?.map(option => (
            <MenuItem key={option.id} value={option.id}>{option.value}</MenuItem>
          ))}
        </Select>
        <>
          {optionSelected && optionItems?.map(option => Number(optionSelected) === option.id && <Ptag className='app-select__text' tag="md">{option.label}</Ptag>)}
        </>
        <div className="author-course__btn">
          <Button
            border='md'
            borderColor='yellow'
            boxShadow='yellow'
            onClick={handleClick}
          >Оплатить</Button>
        </div>
      </FormControl>
    </Box>
  );
}

