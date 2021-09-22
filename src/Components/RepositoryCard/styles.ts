import { createStyles, makeStyles, Theme } from '@material-ui/core';

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
