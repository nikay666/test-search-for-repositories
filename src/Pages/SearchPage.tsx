import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { SearchInput } from '../Components/SearchInput';
import { SearchList } from '../Components/SearchList';
import ListSkeleton from '../Components/ListSkeleton/ListSkeleton';
import { useLazyQuery } from '@apollo/client';
import { useStyles } from './styles';
import { SEARCH_REPOSITORIES } from '../apolloRequests';

export const SearchPage = () => {
  const classes = useStyles();
  const [getRepositories, { loading, error, data, fetchMore }] = useLazyQuery(SEARCH_REPOSITORIES);

  const changeHandler = (value: string | null) => {
    getRepositories({ variables: { repositoryName: value}});
  };
  
  const clickHandler = () => {
    if(fetchMore === undefined) return null;
    const { hasNextPage, endCursor } = data.search.pageInfo;
    hasNextPage && fetchMore({
      variables: {
        cursor: endCursor,
      }
    });
  };

  return (
    <div className='container' >
      <SearchInput setValue={changeHandler} />
      {loading && <ListSkeleton/> }
      {
        !data ? 
          !loading && <Typography className={classes.message} color='textPrimary' variant='body1'>Здесь пока ничего нет</Typography> 
        : <>
          <SearchList edges={data?.search?.edges}  loading={loading} error={error} />
          {data.search?.pageInfo.hasNextPage && <Button  variant='outlined' color='primary' onClick={clickHandler} >Загрузить больше</Button>}
          </>
      }
    </div>
  );
};
