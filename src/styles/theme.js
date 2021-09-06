import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      smallLogo: 400,
      multiLine: 900,
      noLabel: 1140,
      lg: 1280,
      xl: 1920
    }
  }
});