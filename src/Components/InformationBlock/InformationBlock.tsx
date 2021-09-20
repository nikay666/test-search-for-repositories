import React from 'react'
import { Chip, Icon, Typography } from '@material-ui/core';
import { useStyles } from './styles';

interface IInformationBlockProps {
  icon: React.ReactElement,
  title: string,
  count?: number | string,
  className?: string
};

const InformationBlock = ({icon, count, title, className = ''}: IInformationBlockProps) => {
  const classes = useStyles()
  return (
    <div className={`${classes.information} ${className} flex-center`} >
      <Icon fontSize='inherit' className={classes.icon} >{icon}</Icon>
      <Typography variant='inherit' noWrap component='p'>{title}</Typography>
      { count !== undefined && <Chip  className={classes.chip} label={count} size='small' /> }
    </div>
  );
};

export default InformationBlock;
