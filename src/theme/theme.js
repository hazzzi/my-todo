import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#7ba6ff',
			main: '#4178da',
			dark: '#004da8',
			contrastText: '#fff'
		},
		secondary: {
			light: '#637bfe',
			main: '#3d5afe',
			dark: '#2a3eb1',
			contrastText: '#fff'
		}
	}
});

export default theme;
