import React from 'react'
import { CardContent, Container, Typography } from '@material-ui/core';
import { CardTitle } from '../CardTitle';
import { InformationBlock } from '../InformationBlock';
import CircleIcon from '@mui/icons-material/Circle';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import CallMergeIcon from '@mui/icons-material/CallMerge';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { LanguagesBlock } from '../LanguagesBlock';


export const useStyles = makeStyles((theme: Theme) => 
createStyles({
  root: {
    justifyContent: 'space-between',
  },
  information: {
    marginRight: theme.spacing(2),
    margin: '5px 0'
  },
  descripition: {
    margin: '5px 0'
  },
  mainInfo: {
    width: '60%',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: '75%',
      marginRight: 0,
      marginBottom: theme.spacing(2)
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: 0,
      marginBottom: theme.spacing(2)
    }
  },
  languageBlock: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }
  }
})
);


const RepositoryCard = () => {
  const classes = useStyles();

  return (
    <CardContent className={`${classes.root}  flex-wrap`}>
      <div className={classes.mainInfo} >
        <CardTitle to='/repositories/1'>chvin/react-tetris</CardTitle>

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
          <InformationBlock
            className={classes.information}
            icon={<HelpOutlineIcon fontSize='inherit'/>}
            title='Issues'
            count={5}
        />
          <InformationBlock
            className={classes.information}
            icon={<CallMergeIcon fontSize='inherit'/>}
            title='Pull requests'
            count={0}
        />
        </div>

        <Typography className={classes.descripition}  color="textPrimary">Material-UI is a simple and customizable component library to build faster, beautiful, and more accessible React applications. Follow your own design system, or start with Material Design.</Typography>
      </div>
        <LanguagesBlock className={classes.languageBlock} />

    </CardContent>
  )
}

export default RepositoryCard