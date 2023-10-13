import {FC} from 'react';
//mui
import {ButtonProps, Button as MuiButton} from '@mui/material';

const Button: FC<ButtonProps> = ({color = 'primary', variant = 'filled', disabled = false, title, ...rest}) => (
	<MuiButton {...rest} variant={variant} color={color} disabled={disabled}>
		{title}
	</MuiButton>
);

export default Button;
