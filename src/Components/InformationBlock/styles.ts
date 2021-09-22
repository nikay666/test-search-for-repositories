import { createStyles,  makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    information: {
      fontSize: theme.typography.subtitle2.fontSize,
    },
    chip: {
      marginLeft: theme.spacing(0.5)
    },
    icon: {
      marginRight: theme.spacing(0.5) 
    },
    percent: {
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing(0.5)
    }
  })
);