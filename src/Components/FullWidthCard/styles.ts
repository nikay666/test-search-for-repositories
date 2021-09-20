import { createStyles, makeStyles, Theme } from '@material-ui/core';


export const useStyles = makeStyles((theme: Theme) => 
createStyles({
  information: {
    marginRight: theme.spacing(2)
  },
  card: {
    width: '100%',
    background: theme.palette.background.default
  },
  descripition: {
    margin: '5px 0'
  }
})
);
