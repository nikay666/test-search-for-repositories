import React from 'react'
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import './style.css';


interface ICardTitleProps {
  children: string,
  to: string
}

const CardTitle = ({to, children}: ICardTitleProps) => {
  const classes = useStyles()

  return (
       <Link className={`${classes.root} card__title`} to={to} >{children}</Link>
  )
}

export default CardTitle
