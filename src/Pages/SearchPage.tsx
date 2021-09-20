import React from 'react';
import { createStyles, makeStyles, Theme, List, ListItem, Button } from '@material-ui/core';
import { FullWidthCard } from '../Components/FullWidthCard';
import { Link } from 'react-router-dom';

import { SearchCard } from '../SearchCard';
import { SearchInput } from '../Components/SearchInput';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    input: {
      width: '100%'
    },
    listItem: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    list: {
      width: '100%'
    }
  })
);



export const SearchPage = () => {
  const classes = useStyles();
  
  return (
    <div className='container' >
      <SearchInput/>

      <List className={classes.list} >
        <ListItem className={classes.listItem} >
        <FullWidthCard>
          <SearchCard/>
        </FullWidthCard>
        </ListItem>
        <ListItem className={classes.listItem} >
        <FullWidthCard>
          <SearchCard/>
        </FullWidthCard>
        </ListItem>
      </List>

      <Button variant='outlined' color='primary' >Загрузить больше</Button>
      <Link to='/repositories/1'>Rep</Link>
    </div>
  )
};
