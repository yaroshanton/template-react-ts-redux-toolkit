import theme from '../index';

export interface MuiComponentSettings {
	[key: string]: string | number | object;
}

export const MuiCheckbox: MuiComponentSettings = {
	styleOverrides: {
		root: () => ({
			color: theme.palette.neutral300,
		}),
	},
	variants: [
		{
			props: {color: 'primary'},
			style: () => ({
				'&:hover': {
					color: theme.palette.primary500,
				},
				'&.Mui-checked': {
					color: theme.palette.primary500,
				},
				'&.Mui-checked.Mui-disabled, &:disabled': {
					color: theme.palette.neutral200,
				},
			}),
		},
		{
			props: {color: 'error'},
			style: () => ({
				'&:hover': {
					color: theme.palette.error500,
				},
				'&.Mui-checked': {
					color: theme.palette.error500,
				},
				'&.Mui-checked.Mui-disabled, &:disabled': {
					color: theme.palette.neutral200,
				},
			}),
		},
	],
};
