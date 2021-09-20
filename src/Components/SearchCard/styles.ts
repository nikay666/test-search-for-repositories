import { createStyles, makeStyles, Theme } from '@material-ui/core';


export const useStyles = makeStyles((theme: Theme) => 
createStyles({
  information: {
    marginRight: theme.spacing(2)
  },
  descripition: {
    margin: '5px 0'
  }
})
);
