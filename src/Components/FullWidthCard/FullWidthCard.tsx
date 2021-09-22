import React from 'react'
import { Card } from '@material-ui/core';
import { useStyles } from './styles';
import { ApolloError } from '@apollo/client';
import FullWidthCardSkeleton from './FullWidthCardSkeleton';
import { ErrorMessage } from '../ErrorMessage';
interface IFullWidthCardProps {
  error?: ApolloError | undefined
  loading?: boolean
  children?: React.ReactNode
};

const FullWidthCard = ({loading, error, children}: IFullWidthCardProps) => {
  const classes = useStyles()

  if(loading) return <FullWidthCardSkeleton/>
  if(error) return <ErrorMessage error={error.message} />

  return (
    <Card  variant='outlined' className={classes.card} >
      {children}
    </Card>
  )
};

export default FullWidthCard;
