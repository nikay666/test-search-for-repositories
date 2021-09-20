import { List, ListItem, Typography } from '@material-ui/core'
import React from 'react'
import { InformationBlock } from '../InformationBlock'
import CircleIcon from '@mui/icons-material/Circle';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => 
createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',

  },
  information: {
    marginRight: theme.spacing(2),
    margin: '5px 0',
    padding: 0,
  },
  list: {

  },
  listItem: {
    padding: 0,
  }

})
);

interface ILanguagesBlockProps {
  className: string
}

const LanguagesBlock = ({className}: ILanguagesBlockProps) => {
  const classes = useStyles();

  return (
    <div className={className} >
      <Typography variant='h6' component='p' >Languages</Typography>
      
      <List>
        <ListItem className={classes.listItem} >
        <InformationBlock
            className={classes.information}
            icon={<CircleIcon fontSize='inherit'/>}
            title='JavaScript'
            count={5}
        />
        </ListItem>
        <ListItem className={classes.listItem} >
        <InformationBlock
            className={classes.information}
            icon={<CircleIcon fontSize='inherit'/>}
            title='JavaScript'
            count={5}
        />
        </ListItem>
        <ListItem className={classes.listItem} >
        <InformationBlock
            className={classes.information}
            icon={<CircleIcon fontSize='inherit'/>}
            title='JavaScript'
            count={5}
        />
        </ListItem>
      </List>
    </div>
  )
}

export default LanguagesBlock
