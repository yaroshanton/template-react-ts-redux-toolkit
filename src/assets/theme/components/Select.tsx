//mui
import {Theme} from '@mui/material';

export const MuiSelect = {
	styleOverrides: {
		root: ({theme}: {theme: Theme}) => ({
			fontSize: '16px',
			fontWeight: 400,
			lineHeight: '150%',
			letterSpacing: '0.15px',
			height: '44px',
			width: '100%',

			'& > div': {
				padding: '10px 12px',
			},
			'& svg': {
				right: '12px',
			},
			'& input': {
				color: theme.palette.neutral900,
			},
			'& fieldset': {
				borderRadius: 'var(--default--border-radius)',
				border: `1px solid  ${theme.palette.neutral200}`,
				legend: {
					display: 'none',
				},
			},
			'&:hover': {
				'& fieldset': {
					border: `1px solid  ${theme.palette.neutral300} !important`,
				},
			},
			'&.Mui-focused': {
				'& fieldset': {
					border: `1px solid ${theme.palette.primary500} !important`,
				},
			},
			'&.Mui-disabled': {
				color: theme.palette.neutral100,
				'& fieldset': {
					border: `1px solid ${theme.palette.neutral100} !important`,
				},
			},
			'&.Mui-error': {
				'& .MuiSelect-select, input::placeholder': {
					color: theme.palette.error500,
				},
				'& fieldset, &.Mui-focused fieldset': {borderColor: `${theme.palette.error200} !important`},
			},
		}),
	},
};

export const MuiPaper = {
	styleOverrides: {
		root: ({theme}: {theme: Theme}) => {
			return {
				marginTop: '4px',
				'& li': {
					height: '40px',
					'&:hover': {
						backgroundColor: `${theme.palette.primary100} !important`,
					},
					'&:active': {
						backgroundColor: `${theme.palette.primary100} !important`,
					},
					'&:focus': {
						background: 'unset ',
					},
					'& span > span': {
						display: 'none',
					},
				},
				'& .Mui-selected': {
					backgroundColor: 'var(--defaultWhite) !important',
					display: 'flex',
					justifyContent: 'space-between',

					'& svg': {
						width: '16px',
						height: '16px',
					},
				},
			};
		},
	},
};
