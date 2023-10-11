// MUI
import {Theme} from '@mui/material';

interface MuiComponentSettings {
	[key: string]: string | number | object;
}

export const MuiOutlinedInput = {
	styleOverrides: {
		root: ({theme}: {theme: Theme}) => ({
			'&.Mui-error': {
				fieldset: {
					borderColor: theme.palette.error200,
				},
			},
		}),
		notchedOutline: {
			outline: 0,
			borderColor: '#cd463a',
		},
	},
};

export const MuiInputLabel: MuiComponentSettings = {
	styleOverrides: {
		root: ({theme}: {theme: Theme}) => ({
			fontSize: '12px',
			lineHeight: '166%',
			color: theme.palette.neutral900,
			fontWeight: 400,
			marginBottom: '8px',

			'&.Mui-error': {
				color: theme.palette.error500,
			},
		}),
	},
};

export const MuiInputBase = {
	styleOverrides: {
		root: ({theme}: {theme: Theme}) => ({
			fontSize: '16px',
			fontWeight: 400,
			lineHeight: '150%',
			letterSpacing: '0.15px',
			height: '44px',
			width: '100%',
			'& input': {
				padding: '10px 12px',
				color: theme.palette.neutral900,
				'&::placeholder': {
					color: theme.palette.neutral300,
				},
			},
			'& fieldset': {
				borderRadius: '8px',
				border: `1px solid  ${theme.palette.neutral200}`,
				legend: {
					display: 'none',
				},
			},
			'&:hover': {
				'& input::placeholder': {
					color: theme.palette.neutral400,
				},
				'& fieldset': {
					border: `1px solid  ${theme.palette.neutral300} !important`,
				},
			},
			'&.Mui-focused': {
				color: theme.palette.neutral900,
				'& fieldset': {
					border: `1px solid ${theme.palette.primary500} !important`,
				},
			},
			'&.Mui-disabled': {
				color: theme.palette.neutral200,
				'& fieldset': {
					border: `1px solid ${theme.palette.neutral100} !important`,
				},
			},
			'&.Mui-error': {
				'& input, input::placeholder': {
					color: theme.palette.error500,
				},
				'& fieldset, &.Mui-focused fieldset': {borderColor: `${theme.palette.error200} !important`},
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
				color: theme.palette.neutral300,
				fontWeight: 700,
				fontSize: '20px',
				lineHeight: 'normal',

				'&.Mui-focused, &.MuiFormLabel-filled': {
					color: theme.palette.neutral300,
					fontSize: '12px',
					transform: 'translate(12px, 4px) scale(0.75)',
					letterSpacing: '0.4px',
					fontWeight: 400,
				},
			},
		}),
	},
};
