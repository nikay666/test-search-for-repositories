import React from 'react'
import { Alert, AlertTitle } from '@mui/material';


interface IErrorMessageProps{
  error: string
}
const ErrorMessage = ({error}: IErrorMessageProps) => {
  return (
    <Alert severity='error'>
      <AlertTitle>Упс! Что-то пошло не так </AlertTitle>
    {`${error}`}</Alert>  
  )
}

export default ErrorMessage
