import {ChangeEvent, FC} from 'react';
//mui
import {RadioProps, Checkbox as MuiCheckbox, FormControlLabel, Typography} from '@mui/material';
//icons
import {ReactComponent as CheckedPrimary} from '@images/icons/checkbox-checked.svg';
import {ReactComponent as CheckedError} from '@images/icons/close-square.svg';
import {ReactComponent as Unchecked} from '@images/icons/checkbox-unchecked.svg';
//styles
import cx from 'classnames';
import {FieldInputProps, FormikProps} from 'formik';
import styles from '../Radio/styles.module.scss';

export interface ExtendedCheckboxProps extends Omit<RadioProps, 'form'> {
	label?: string;
	field?: FieldInputProps<string | number>;
	form?: FormikProps<any>;
}

const Checkbox: FC<ExtendedCheckboxProps> = ({
	color = 'primary',
	disabled = false,
	form,
	field,
	onChange,
	value,
	label,
	className,
	...rest
}) => {
	const changeHandler = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
		if (onChange) {
			onChange(event, checked);
		} else if (form && field) {
			form.setFieldValue(field.name, checked);
		}
	};

	return (
		<FormControlLabel
			value={value}
			className={className}
			label={
				<Typography className={cx(styles.radioLabel, {[styles.radioLabel__disabled]: disabled})}>{label}</Typography>
			}
			control={
				<MuiCheckbox
					{...rest}
					checkedIcon={color === 'primary' ? <CheckedPrimary /> : <CheckedError />}
					icon={<Unchecked />}
					onChange={changeHandler}
					value={value}
					color={color}
					disabled={disabled}
				/>
			}
		/>
	);
};

export default Checkbox;
