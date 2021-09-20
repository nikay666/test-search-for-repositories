import { IconButton } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { FullWidthCard } from '../Components/FullWidthCard';
import { RepositoryCard } from '../Components/RepositoryCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const RepositoriesPage = () => {
  return (
    <div>
      <Link to='/'><IconButton aria-label='Назад'><ArrowBackIcon/></IconButton></Link>
      <FullWidthCard>
          <RepositoryCard/>
        </FullWidthCard>
    </div>
  );
};
