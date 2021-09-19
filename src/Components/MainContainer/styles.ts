import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    main: {
      backgroundColor: theme.palette.background.default,
      height: '100vh',
      width: '100%',
      paddingTop: 30,
    },
  })
)