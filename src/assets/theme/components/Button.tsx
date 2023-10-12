import theme from '../index';

export interface MuiComponentSettings {
	[key: string]: string | number | object;
}

export const MuiButton: MuiComponentSettings = {
	styleOverrides: {
		root: {
			fontSize: '16px',
			padding: '10px 16px',
			borderRadius: '8px',
			fontFamily: 'Lato',
			lineHeight: '28px',
			minWidth: '173px',
			textTransform: 'Capitalize',
		},
	},
	variants: [
		{
			props: {variant: 'filled', color: 'primary'},
			style: () => ({
				color: theme.palette.neutral50,
				backgroundColor: theme.palette.primary500,
				'&:hover': {
					backgroundColor: theme.palette.primary400,
				},
				'&:active': {
					backgroundColor: theme.palette.primary600,
				},
				'&:disabled': {
					backgroundColor: theme.palette.primary200,
					color: theme.palette.neutral50,
				},
			}),
		},
		{
			props: {variant: 'filled', color: 'error'},
			style: () => ({
				color: theme.palette.neutral50,
				backgroundColor: theme.palette.error500,
				'&:hover': {
					backgroundColor: theme.palette.error400,
				},
				'&:active': {
					backgroundColor: theme.palette.error600,
				},
				'&:disabled': {
					backgroundColor: theme.palette.error200,
					color: theme.palette.neutral50,
				},
			}),
		},
		{
			props: {variant: 'filled', color: 'warning'},
			style: () => ({
				color: theme.palette.neutral50,
				backgroundColor: theme.palette.warning500,
				'&:hover': {
					backgroundColor: theme.palette.warning400,
				},
				'&:active': {
					backgroundColor: theme.palette.warning600,
				},
				'&:disabled': {
					backgroundColor: theme.palette.warning200,
					color: theme.palette.neutral50,
				},
			}),
		},
		{
			props: {variant: 'outline', color: 'primary'},
			style: () => ({
				backgroundColor: theme.palette.neutral50,
				color: theme.palette.primary500,
				border: `1px solid ${theme.palette.primary500}`,
				'&:hover': {
					border: `1px solid ${theme.palette.primary400}`,
					backgroundColor: theme.palette.primary100,
					color: theme.palette.primary400,
				},
				'&:active': {
					border: `1px solid ${theme.palette.primary600}`,
					backgroundColor: theme.palette.primary100,
					color: theme.palette.primary600,
				},
				'&:disabled': {
					border: `1px solid ${theme.palette.primary200}`,
					color: theme.palette.primary200,
				},
			}),
		},
		{
			props: {variant: 'outline', color: 'error'},
			style: () => ({
				backgroundColor: theme.palette.neutral50,
				color: theme.palette.error500,
				border: `1px solid ${theme.palette.error500}`,
				'&:hover': {
					border: `1px solid ${theme.palette.error400}`,
					backgroundColor: theme.palette.error100,
					color: theme.palette.error400,
				},
				'&:active': {
					border: `1px solid ${theme.palette.error600}`,
					backgroundColor: theme.palette.error100,
					color: theme.palette.error600,
				},
				'&:disabled': {
					border: `1px solid ${theme.palette.error200}`,
					color: theme.palette.error200,
				},
			}),
		},
		{
			props: {variant: 'outline', color: 'warning'},
			style: () => ({
				backgroundColor: theme.palette.neutral50,
				color: theme.palette.warning500,
				border: `1px solid ${theme.palette.warning500}`,
				'&:hover': {
					border: `1px solid ${theme.palette.warning400}`,
					backgroundColor: theme.palette.warning100,
					color: theme.palette.warning400,
				},
				'&:active': {
					border: `1px solid ${theme.palette.warning600}`,
					backgroundColor: theme.palette.warning100,
					color: theme.palette.warning600,
				},
				'&:disabled': {
					border: `1px solid ${theme.palette.warning200}`,
					color: theme.palette.error200,
				},
			}),
		},
	],
};
