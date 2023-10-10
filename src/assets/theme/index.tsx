// MUI
import { createTheme } from '@mui/material';
//components
import { MuiButton } from './components/Button';

declare module '@mui/material/styles' {
	export interface Palette {
		darkGray: string;
	}
	interface PaletteOptions {
		darkGray?: string;
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		filled: true;
		outline: true;
	}
}

const theme = createTheme({
	palette: {
		darkGray: '#000',
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
	typography: {
		fontFamily: 'Lato',
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
	},
	components: {
		MuiButton,
	},
});

export type ThemePaletteKeys = keyof typeof theme.palette;

export default theme;
