export interface MuiComponentSettings {
	[key: string]: string | number | object;
}

export const MuiButton: MuiComponentSettings = {
	styleOverrides: {
		root: {
			width: '100%',
		},
	},
	variants: [
		{
			props: {
				variant: 'filled',
				color: '#000',
			},
		},
		{
			props: {
				variant: 'outline',
				color: '#000',
			},
		},
	],
};
