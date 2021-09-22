import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    input: {
      width: '100%'
    },
    listItem: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    list: {
      width: '100%'
    },
    message: {
      marginTop: '40px'
    }
  })
);