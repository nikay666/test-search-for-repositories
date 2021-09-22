import React from 'react'
import { Chip, Icon, Typography } from '@material-ui/core';
import { useStyles } from './styles';
interface IInformationBlockProps {
  icon: React.ReactElement,
  title: string,
  count?: number | string,
  className?: string
  percent?: number
};

const InformationBlock = ({icon, count, title, percent, className = ''}: IInformationBlockProps) => {
  const classes = useStyles()

  if(percent === 0) return null

  return (
    <div className={`${classes.information} ${className} flex-center`} >
      <Icon fontSize='inherit' className={classes.icon} >{icon}</Icon>
      <Typography variant='inherit' noWrap component='p'>{title}</Typography>
      { count !== undefined && <Chip className={classes.chip} label={count} size='small' /> }
      {percent !== undefined && <Typography variant='inherit' className={classes.percent} component='p' >{`${percent}%`}</Typography>  }
    </div>
  );
};

export default InformationBlock;
