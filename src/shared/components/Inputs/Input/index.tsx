import {FC} from 'react';
import cx from 'classnames';
//mui
import {Box, BaseTextFieldProps, TextField as MuiInput, InputLabel as MuiInputLabel} from '@mui/material';
//components
import InputErrorHint from '../InputErrorHint';
//styles
import styles from './styles.module.scss';

interface InputProps extends Omit<BaseTextFieldProps, 'errorMassage'> {
	label: string;
	isError?: boolean;
	errorMassage?: string;
}

const Input: FC<InputProps> = ({
	label,
	type = 'text',
	className,
	errorMassage,
	sx = {},
	isError = false,
	inputProps,
	...rest
}) => {
	return (
		<Box className={cx(className, styles.input)} sx={sx}>
			<MuiInputLabel htmlFor="input" error={isError}>
				{label}
			</MuiInputLabel>
			<MuiInput {...rest} id="input" inputProps={{...inputProps}} type={type} error={isError} />

			{errorMassage && isError && <InputErrorHint text={errorMassage} />}
		</Box>
	);
};

export default Input;
