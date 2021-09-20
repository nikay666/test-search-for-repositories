import { blue, green, pink, red } from '@material-ui/core/colors';
import {  createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: blue[200]
    },
    secondary: {
      main: pink[200]
    },
    success: {
      main: green[300]
    },
    error: {
      main: red[300]
    },
    background: {
      default: '#212121'
    }
  },
});
