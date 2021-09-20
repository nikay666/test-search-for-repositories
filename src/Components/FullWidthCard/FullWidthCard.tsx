import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { CardTitle } from '../CardTitle';
import { InformationBlock } from '../InformationBlock';
import CircleIcon from '@mui/icons-material/Circle';
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
