import { IconButton } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { FullWidthCard } from '../Components/FullWidthCard';
import { RepositoryCard } from '../Components/RepositoryCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../apolloRequests';
import { RouteComponentProps, useHistory } from 'react-router'

type TParams = {
  id: string
}

export const RepositoriesPage = ({match}: RouteComponentProps<TParams>) => {
  const { loading, error, data } = useQuery(GET_REPOSITORY, { variables: { repositoryID: match.params.id }})

  return (
    <div>
      <Link to='/'><IconButton aria-label='Назад'><ArrowBackIcon/></IconButton></Link>
      <FullWidthCard loading={loading} error={error} >
        <RepositoryCard {...data?.node}/>
      </FullWidthCard>
    </div>
  );
};
