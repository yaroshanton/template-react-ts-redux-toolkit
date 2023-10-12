//mui
import {Theme} from '@mui/material';

export const MuiSwitch = {
	styleOverrides: {
		root: ({theme}: {theme: Theme}) => {
			return {
				width: 40,
				height: 24,
				padding: 0,
				'& .MuiSwitch-switchBase': {
					padding: 0,
					margin: 4,
					transitionDuration: '300ms',
					'&.Mui-checked': {
						transform: 'translateX(16px)',
						color: theme.palette.primary500,
						'& + .MuiSwitch-track': {
							backgroundColor: theme.palette.primary100,
							opacity: 1,
							border: 0,
						},
						'&.Mui-disabled + .MuiSwitch-track': {
							opacity: 0.5,
						},
					},
					'&.Mui-focusVisible .MuiSwitch-thumb': {
						color: '#33cf4d',
						border: '6px solid var(--defaultWhite)',
					},
					'&.Mui-disabled .MuiSwitch-thumb': {
						color: theme.palette.grey[100],
					},
					'&.Mui-disabled + .MuiSwitch-track': {
						opacity: 0.7,
					},
				},
				'& .MuiSwitch-thumb': {
					boxSizing: 'border-box',
					display: 'flex',
					alignItem: 'center',
					width: 16,
					height: 16,
				},
				'& .MuiSwitch-track': {
					borderRadius: 26 / 2,
					backgroundColor: theme.palette.neutral100,
					opacity: 1,
					transition: theme.transitions.create(['background-color'], {
						duration: 500,
					}),
				},
			};
		},
	},
};
