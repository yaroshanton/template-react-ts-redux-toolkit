import {ChangeEvent, FC, useMemo} from 'react';
import cx from 'classnames';
//mui
import {
	Box,
	BaseTextFieldProps,
	TextField as MuiInput,
	InputLabel as MuiInputLabel,
	FormHelperText,
	TextFieldProps,
} from '@mui/material';
//formik
import {FieldInputProps, FormikProps} from 'formik';
//styles
import styles from './styles.module.scss';

interface ExtendedInputProps extends BaseTextFieldProps, Pick<TextFieldProps, 'value' | 'onBlur'> {
	field: FieldInputProps<string | number>;
	form: FormikProps<any>;
	label: string;
	disableErrorMessage?: boolean;
	onChange?: (event: string) => void;
}

const Input: FC<ExtendedInputProps> = ({
	label,
	form,
	id,
	field,
	onChange,
	className,
	type,
	inputProps,
	disableErrorMessage,
	...rest
}) => {
	const {errors, touched} = form;

	const errorText = useMemo(
		() => (errors[field.name] && touched[field.name] && (errors[field.name] as string)) || undefined,
		[errors, field, touched]
	);

	const changeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		if (onChange) {
			const {value} = event.target;
			onChange(value);
		} else {
			field.onChange(event);
		}
	};

	return (
		<Box className={cx(className, styles.wrapper)}>
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

			{!disableErrorMessage && errorText && <FormHelperText error>{errorText}</FormHelperText>}
		</Box>
	);
};

export default Input;
