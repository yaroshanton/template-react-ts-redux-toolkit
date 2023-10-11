// MUI
import {Theme} from '@mui/material';

interface MuiComponentSettings {
	[key: string]: string | number | object;
}

export const MuiOutlinedInput = {
	styleOverrides: {
		root: {
			'&.Mui-error': {
				fieldset: {
					borderColor: '#cd463a !important',
				},
			},
		},
		notchedOutline: {
			outline: 0,
			borderColor: '#cd463a',
			// borderWidth: '1px',
		},
	},
};

export const MuiInputLabel: MuiComponentSettings = {
	styleOverrides: {
		root: ({theme}: {theme: Theme}) => ({
			fontSize: '20px',
			lineHeight: '22px',
			color: theme.palette.darkGray,
			fontWeight: 400,
			textAlign: 'center',
			marginBottom: '8px',

			'&.Mui-error': {
				color: '#AAACAB',
			},
		}),
	},
};

export const MuiInputBase = {
	styleOverrides: {
		root: ({theme}: {theme: Theme}) => ({
			fontSize: '20px',
			fontWeight: 700,
			lineHeight: '160%',
			letterSpacing: '0.15px',
			color: theme.palette.darkGray,
			height: '144px',
			width: '100%',
			'& input': {
				padding: '4px 12px',
			},
			'& fieldset': {
				borderRadius: '8px',
				border: `1px solid  ${theme.palette.darkGray}`,
				legend: {
					display: 'none',
				},
			},
			'&:hover fieldset': {
				border: `1px solid ${theme.palette.darkGray}`,
			},
			'&.Mui-focused fieldset': {
				border: `1px solid ${theme.palette.darkGray} !important`,
			},
			'&.Mui-error': {
				'& fieldset, &.Mui-focused fieldset': {borderColor: `${theme.palette.darkGray} !important`},
			},
		}),
	},
	defaultProps: {
		autoComplete: 'off',
	},
};

export const MuiFormControl = {
	styleOverrides: {
		root: ({theme}: {theme: Theme}) => ({
			width: '100%',

			'& .MuiInputLabel-animated': {
				color: theme.palette.darkGray,
				fontWeight: 700,
				fontSize: '20px',
				lineHeight: 'normal',

				'&.Mui-focused, &.MuiFormLabel-filled': {
					color: theme.palette.darkGray,
					fontSize: '12px',
					transform: 'translate(12px, 4px) scale(0.75)',
					letterSpacing: '0.4px',
					fontWeight: 400,
				},
			},
		}),
	},
};
