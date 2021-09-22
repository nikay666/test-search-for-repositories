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
