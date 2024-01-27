import { createTheme, ThemeOptions } from "@mui/material";

const themeStyles = {
  palette: {
    mode: 'light',
    primary: {
    main: '#4f5764',
  },
  secondary: {
    main: '#4f5764',
    light: '#4f5764',
  },
  text: {
    primary: '#4f5764',
    secondary: '#434b56',
  },
  },
  typography: {
      body1: {
        fontFamily:[
          'Poppins',
          'sans-serif'
        ].join(','),
        color: '#4f5764',
      },
      h4: {
        color: '#383e47',
      },
      button: {
        fontFamily:[
          'Poppins',
          'sans-serif'
        ].join(','),
        color: '#4f5764'
      },
  },
};

const theme = createTheme(themeStyles as ThemeOptions);

export default theme