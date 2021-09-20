import React from 'react'
import { Card } from '@material-ui/core';
import { useStyles } from './styles';

interface IFullWidthCardProps {
  children: React.ReactNode
}

const FullWidthCard = ({children}: IFullWidthCardProps) => {
  const classes = useStyles()

  return (
    <Card  variant='outlined' className={classes.card} >
      {children}
    </Card>
  )
}

export default FullWidthCard;
