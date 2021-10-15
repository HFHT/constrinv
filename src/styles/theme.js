import { createTheme } from '@mui/material/styles';
//import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@mui/material/styles';

import { red } from '@mui/material/colors';
// Create a theme instance.
export let theme = createTheme({
  palette: {
    mode: 'dark',
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
      smallBadge: 500,
      sm: 600,
      multiLine: 1280,
      md: 960,
      noLabel: 800,
      noTitle: 960,
      lg: 1280,
      xl: 1920
    }
  }
})
// MuiDropZoneArea only left in as example.
theme = createTheme(theme, {
  components: {
    MuiDropzoneArea: {
      styleOverrides: {
        root: {
          height: 'auto',

          border: 'unset'
        }
      }
    }
  }
})
