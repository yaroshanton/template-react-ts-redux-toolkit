import {ChangeEvent, FC, useMemo} from 'react';
import cx from 'classnames';
//mui
import {Box, BaseTextFieldProps, TextField as MuiInput, InputLabel as MuiInputLabel} from '@mui/material';
//formik
import {FieldInputProps, FormikProps} from 'formik';
//components
import InputErrorHint from '../InputErrorHint';
//styles
import styles from './styles.module.scss';

interface InputProps extends Omit<BaseTextFieldProps, 'disableErrorMessage'> {
	field: FieldInputProps<string | number>;
	form: FormikProps<any>;
	label: string;
	disableErrorMessage?: boolean;
	onChange?: (event: string) => void;
}

const Input: FC<InputProps> = ({
	label,
	form,
	id,
	field,
	onChange,
	className,
	type,
	sx = {},
	inputProps,
	disableErrorMessage,
	...rest
}) => {
	const {errors, touched} = form;

	const errorText = useMemo(
		() => (errors[field.name] && touched[field.name] && (errors[field.name] as string)) || undefined,
		[errors, field, touched]
	);

	const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			const {value} = event.target;
			onChange(value);
		} else {
			field.onChange(event);
		}
	};

	return (
		<Box className={cx(className, styles.input)} sx={sx}>
			<MuiInputLabel htmlFor={id} error={!!errorText}>
				{label}
			</MuiInputLabel>

			<MuiInput
				{...rest}
				id={id}
				onChange={changeHandler}
				inputProps={{...inputProps}}
				type={type || 'text'}
				error={!!errorText}
			/>

			{!disableErrorMessage && errorText && <InputErrorHint text={errorText} />}
		</Box>
	);
};

export default Input;
