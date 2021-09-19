import React from 'react';
import { TextField, createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    input: {
      width: '100%'
    }
  })
);

export const SearchPage = () => {
  const classes = useStyles();
  
  return (
    <div>
      <TextField  className={classes.input}  type='text' label='Поиск' variant='outlined'  />  
    </div>
  )
};
