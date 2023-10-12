import {ChangeEvent, FC} from 'react';
import cx from 'classnames';
//mui
import {Box, Switch as MuiSwitch, SwitchProps} from '@mui/material';
//formik
import {FieldInputProps, FormikProps} from 'formik';
//styles
import styles from './styles.module.scss';

interface CustomSelectProps extends Omit<SwitchProps, 'field' | 'form'> {
	field?: FieldInputProps<string | number>;
	form?: FormikProps<any>;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Switch: FC<CustomSelectProps> = ({field, form, className, onChange, ...rest}) => {
	const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(event);
		} else if (form && field) {
			form.setFieldValue(field.name, event.target.checked);
		}
	};

	return (
		<Box className={cx(className, styles.wrapper)}>
			<MuiSwitch {...rest} onChange={changeHandler} />
		</Box>
	);
};

export default Switch;
