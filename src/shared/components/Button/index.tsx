import {FC} from 'react';

import {ButtonProps, SxProps, Button as MuiButton} from '@mui/material';
import cx from 'classnames';

export type OwnProps = {
	styles?: SxProps;
};

export type ExtendedButtonProps = OwnProps & ButtonProps;

const Button: FC<ExtendedButtonProps> = ({
	title,
	color = 'primary',
	type,
	startIcon,
	endIcon,
	disabled = false,
	styles,
	className,
	onClick,
	size,
	variant = 'filled',
}) => (
	<MuiButton
		variant={variant}
		onClick={onClick}
		color={color}
		type={type}
		disabled={disabled}
		startIcon={startIcon}
		endIcon={endIcon}
		size={size}
		className={cx(className)}
		sx={{
			...styles,
		}}
	>
		{title}
	</MuiButton>
);

export default Button;
