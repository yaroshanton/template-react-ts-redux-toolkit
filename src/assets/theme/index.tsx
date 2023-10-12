// MUI
import {createTheme} from '@mui/material';
//components
import {MuiButton} from './components/Button';
import {MuiFormControl, MuiInputBase, MuiInputLabel, MuiOutlinedInput, MuiFormHelperText} from './components/Input';
import {MuiSelect, MuiPaper} from './components/Select';

declare module '@mui/material/styles' {
	export interface Palette {
		neutral100: string;
		neutral200: string;
		neutral300: string;
		neutral400: string;
		neutral900: string;
		primary100: string;
		primary500: string;
		error200: string;
		error500: string;
	}
	interface PaletteOptions {
		neutral100?: string;
		neutral200?: string;
		neutral300?: string;
		neutral400?: string;
		neutral900?: string;
		primary100?: string;
		primary500?: string;
		error200?: string;
		error500?: string;
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
		neutral100: '#f0f1f4',
		neutral200: '#c3c7d4',
		neutral300: '#8f98a9',
		neutral400: '#6b788f',
		neutral900: '#0c1525',
		primary100: '#e6f8ff',
		primary500: '#26b5ed',
		error200: '#feb4b6',
		error500: '#fb0b24',
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
		MuiFormControl,
		MuiInputBase,
		MuiInputLabel,
		MuiOutlinedInput,
		MuiSelect,
		MuiPaper,
		MuiFormHelperText,
	},
});

export type ThemePaletteKeys = keyof typeof theme.palette;

export default theme;
