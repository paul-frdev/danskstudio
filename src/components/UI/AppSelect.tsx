import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface BaseOptions {
  id: number;
  value: string;
  label: string
}

interface AppSelectProps {
  optionItems?: BaseOptions[];
}
export const AppSelect = ({ optionItems }: AppSelectProps) => {
  const [option, setOption] = React.useState('');

  console.log(option);

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target);
    
    setOption(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Выберете курс</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="Age"
          onChange={handleChange}
        >
          {optionItems?.map(option => (
            <MenuItem key={option.id} value={option.id}>{option.value}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

