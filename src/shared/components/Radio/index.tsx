import {ChangeEvent, FC} from 'react';
import cx from 'classnames';
//formik
import {FieldInputProps, FormikProps} from 'formik';
//mui
import {RadioProps, Radio as MuiRadio, FormControlLabel, Typography} from '@mui/material';
//icons
import {ReactComponent as Checked} from '@images/icons/rudiobutton-checked.svg';
import {ReactComponent as Unchecked} from '@images/icons/rudiobutton-unchecked.svg';
//styles
import styles from './styles.module.scss';

export interface ExtendedRadioProps extends Omit<RadioProps, 'form'> {
	label?: string;
	field?: FieldInputProps<string | number>;
	form?: FormikProps<any>;
}

const Radio: FC<ExtendedRadioProps> = ({
	color,
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
				<MuiRadio
					{...rest}
					checkedIcon={<Checked />}
					icon={<Unchecked />}
					onChange={changeHandler}
					value={value}
					color={color || 'primary'}
					disabled={disabled}
				/>
			}
		/>
	);
};

export default Radio;
