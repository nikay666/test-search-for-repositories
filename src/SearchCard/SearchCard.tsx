import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { CardTitle } from '../Components/CardTitle';
import { InformationBlock } from '../Components/InformationBlock';
import CircleIcon from '@mui/icons-material/Circle';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useStyles } from './styles';

const SearchCard = () => {
  const classes = useStyles();
  
  return (
    <CardContent>
    <CardTitle to='/repositories/1'>chvin/react-tetris</CardTitle>
    <Typography className={classes.descripition}  color="textPrimary">Use React, Redux, Immutable to code Tetris. 🎮</Typography>

    <div className='flex-center' >
      <InformationBlock
        className={classes.information}
        icon={<StarBorderIcon  fontSize='inherit'/>}
        title='1.1k'
     />
     <InformationBlock
        className={classes.information}
        icon={<CircleIcon fontSize='inherit'/>}
        title='JavaScript'
     />
    </div>
    </CardContent>
  );
};

export default SearchCard;
