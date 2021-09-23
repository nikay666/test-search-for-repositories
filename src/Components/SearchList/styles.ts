import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    listItem: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    list: {
      width: '100%',
      marginBottom: 50
    },
  })
);