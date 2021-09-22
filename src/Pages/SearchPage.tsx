import React, { useState } from 'react';
import { createStyles, makeStyles, Theme, List, ListItem, Button } from '@material-ui/core';
import { FullWidthCard } from '../Components/FullWidthCard';
import { Link } from 'react-router-dom';
import { SearchCard } from '../Components/SearchCard';
import { SearchInput } from '../Components/SearchInput';
import { SEARCH_REPOSITORIES } from '../apolloRequests';
import { useLazyQuery } from '@apollo/client';

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

const str = 'material'

export const SearchPage = () => {
  const classes = useStyles();
  const [queryString, setQueryString] = useState('')
  const [getRepositories, { loading, error, data }] = useLazyQuery(SEARCH_REPOSITORIES)

  const changeHandler = (value: string) => {
    setQueryString(value)
    console.log('query', queryString)
    getRepositories( { variables: { repositoryName: queryString }})
  }

  console.log(data, error, loading)
  
  return (
    <div className='container' >
      <SearchInput setValue={changeHandler} />

      <List className={classes.list} >
        <ListItem className={classes.listItem} >
        <FullWidthCard>
          <SearchCard/>
        </FullWidthCard>
        </ListItem>
      </List>

      <Button variant='outlined' color='primary' >Загрузить больше</Button>
    </div>
  )
};
