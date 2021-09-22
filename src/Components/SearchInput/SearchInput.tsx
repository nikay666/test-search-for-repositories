import React, { useState } from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';

interface ISearchInputProps {
  setValue: Function
}

const SearchInput = ({setValue}: ISearchInputProps) => {
  const [state, setState] = useState('')

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.currentTarget.value)
  }

  const enterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.code === 'Enter'){
      setValue(state)
      setState('')
    }
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
      onKeyDown={enterHandler}
    />  
  );
};

export default SearchInput;
