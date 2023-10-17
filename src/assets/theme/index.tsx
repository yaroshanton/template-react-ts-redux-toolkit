//mui
import {createTheme} from '@mui/material';
//components
import {MuiRadio} from '@/assets/theme/components/Radio';
import {MuiCheckbox} from '@/assets/theme/components/Checkbox';
import {MuiButton} from '@/assets/theme/components/Button';
import {
	MuiFormControl,
	MuiInputBase,
	MuiInputLabel,
	MuiOutlinedInput,
	MuiFormHelperText,
} from '@/assets/theme/components/Input';
import {MuiSelect, MuiPaper} from '@/assets/theme/components/Select';
import {MuiSwitch} from '@/assets/theme/components/Switch';

declare module '@mui/material/styles' {
	export interface Palette {
		neutral50: string;
		neutral100: string;
		neutral200: string;
		neutral300: string;
		neutral400: string;
		neutral900: string;
		primary100: string;
		primary200: string;
		primary400: string;
		primary500: string;
		primary600: string;
		error100: string;
		error200: string;
		error400: string;
		error500: string;
		error600: string;
		warning100: string;
		warning200: string;
		warning400: string;
		warning500: string;
		warning600: string;
	}
	interface PaletteOptions {
		neutral50?: string;
		neutral100?: string;
		neutral200?: string;
		neutral300?: string;
		neutral400?: string;
		neutral900?: string;
		primary100?: string;
		primary200?: string;
		primary400?: string;
		primary500?: string;
		primary600?: string;
		error100?: string;
		error200?: string;
		error400?: string;
		error500?: string;
		error600?: string;
		warning100?: string;
		warning200?: string;
		warning400?: string;
		warning500?: string;
		warning600?: string;
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
		neutral50: '#fbfbfb',
		neutral100: '#f0f1f4',
		neutral200: '#c3c7d4',
		neutral300: '#8f98a9',
		neutral400: '#6b788f',
		neutral900: '#0c1525',
		primary100: '#e6f8ff',
		primary200: '#b6eafe',
		primary400: '#52c9f8',
		primary500: '#26b5ed',
		primary600: '#128ebf',
		error200: '#feb4b6',
		error100: '#fee6e8',
		error400: '#fe4a52',
		error500: '#fb0b24',
		error600: '#ca0008',
		warning100: '#fceddb',
		warning200: '#feddaf',
		warning400: '#f5aa3d',
		warning500: '#f19702',
		warning600: '#c27501',
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
		MuiRadio,
		MuiCheckbox,
		MuiInputBase,
		MuiInputLabel,
		MuiOutlinedInput,
		MuiSelect,
		MuiPaper,
		MuiFormHelperText,
		MuiSwitch,
	},
});

export type ThemePaletteKeys = keyof typeof theme.palette;

export default theme;
