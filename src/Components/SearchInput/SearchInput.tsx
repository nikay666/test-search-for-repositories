import React, { useState } from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';

interface ISearchInputProps {
  setValue: (value: string | null) => void
}

const SearchInput = ({setValue}: ISearchInputProps) => {
  const [state, setState] = useState('')

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    value === '' ? setValue(null) : setValue(value)
    setState(value)
  }

  return (
    <TextField 
      fullWidth
      type='text' 
      label='Поиск'
      variant='outlined'
      value={state}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end' >
            <SearchIcon/>
          </InputAdornment>
        )
      }}
      onChange={changeHandler}
    />  
  );
};

export default SearchInput;
