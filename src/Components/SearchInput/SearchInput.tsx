import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = () => {
  return (
    <TextField 
      fullWidth
      type='text' 
      label='Поиск'
      variant='outlined'
      InputProps={{
        endAdornment: (
          <InputAdornment position='end' >
            <SearchIcon/>
          </InputAdornment>
        )
      }} 
    />  
  );
};

export default SearchInput;
