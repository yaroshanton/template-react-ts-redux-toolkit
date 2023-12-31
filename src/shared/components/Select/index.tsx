import {FC, useMemo} from 'react';
import cx from 'classnames';
//mui
import {
	Box,
	MenuItem,
	InputLabel as MuiInputLabel,
	Select as MiuSelect,
	SelectChangeEvent,
	SelectProps,
	FormControl,
	FormHelperText,
} from '@mui/material';
//formik
import {FieldInputProps, FormikProps} from 'formik';
//icons
import {ReactComponent as Accept} from '@icons/accept.svg';
import {ReactComponent as ArrowDown} from '@icons/arrow-down.svg';
//styles
import styles from './styles.module.scss';

interface CustomSelectProps extends SelectProps<any> {
	field?: FieldInputProps<string | number>;
	form?: FormikProps<any>;
	options?: string[];
	disableErrorMessage?: boolean;
	customError?: string;
	onChange?: (event: SelectChangeEvent<string>) => void;
}

const Select: FC<CustomSelectProps> = ({
	field,
	value,
	form,
	label,
	id,
	multiple,
	options,
	disableErrorMessage,
	customError,
	className,
	placeholder,
	disabled,
	onChange,
	...rest
}) => {
	const errorText = useMemo(() => {
		if (customError) return customError;
		return (field?.name && form?.touched[field?.name] && (form?.errors[field?.name] as string)) || undefined;
	}, [form?.errors, form?.touched, field, customError]);

	const changeHandler = (event: SelectChangeEvent) => {
		if (onChange) {
			onChange(event);
		} else if (form && field) {
			form.setFieldValue(field.name, event.target.value);
		}
	};

	return (
		<Box className={cx(className, styles.wrapper)}>
			{label && (
				<MuiInputLabel htmlFor={id} error={!!errorText} disabled={disabled}>
					{label}
				</MuiInputLabel>
			)}

			<FormControl disabled={disabled} error={!!errorText}>
				<MiuSelect
					{...rest}
					id={id}
					multiple={multiple}
					value={value}
					label={false}
					onChange={changeHandler}
					displayEmpty
					IconComponent={ArrowDown}
					renderValue={(selected) => {
						if (!selected?.length) {
							return <em className={styles.placeholder}>{placeholder}</em>;
						}
						if (multiple) return [...selected].join(', ');
						return selected;
					}}
				>
					{options?.map((item: string) => (
						<MenuItem key={item} value={item}>
							{item}
							{value.includes(item) && <Accept />}
						</MenuItem>
					))}
				</MiuSelect>
			</FormControl>

			{!disableErrorMessage && errorText && <FormHelperText error>{errorText}</FormHelperText>}
		</Box>
	);
};

export default Select;
