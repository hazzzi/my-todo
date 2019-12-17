import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#aa90d7',
      main: '#9575cd',
      dark: '#68518f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#7357b9',
      main: '#512da8',
      dark: '#381f75',
      contrastText: '#fff',
    },
  },
});

export default theme;
