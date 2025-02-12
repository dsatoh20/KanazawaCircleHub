// theme.js or theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#c3bd6b',
      light: '#ede584',
      dark: '#9b9654',
      contrastText: '#fff',
    },
    secondary: {
      main: '#bdbbf4',
      dark: '#9490ec',
      light: '#e8e7fb',
    },
    success: {
      main: '#50be6c',
      contrastText: "#FFFFFF",
    },
    error: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});
export default theme;
