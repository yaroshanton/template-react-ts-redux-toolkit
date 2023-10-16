import {FC} from 'react';
//mui
import {ButtonProps, Button as MuiButton} from '@mui/material';

const Button: FC<ButtonProps> = ({color, variant, disabled = false, children, ...rest}) => (
	<MuiButton {...rest} variant={variant || 'filled'} color={color || 'primary'} disabled={disabled}>
		{children}
	</MuiButton>
);

export default Button;
