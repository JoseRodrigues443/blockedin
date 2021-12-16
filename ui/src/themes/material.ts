import { createTheme, ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#FFFFFF',
      light: '#EEF3F8',
    },
    secondary: {
      main: '#f50057',
    },
  },
};

const mdTheme = createTheme(themeOptions);

export default mdTheme;