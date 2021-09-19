import React from 'react';
import { Container } from '@material-ui/core';
import { useStyles } from './styles';


interface IMainContainerProps {
  children: React.ReactNode
};


const MainContainer = ({children}: IMainContainerProps) => {
  const classes = useStyles();

  return (
    <main className={classes.main} >  
      <Container maxWidth='md' >
        <>
        { children }
        </>
      </Container>
    </main>
    
  );
};

export default MainContainer;