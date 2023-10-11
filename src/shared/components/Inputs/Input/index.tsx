import {ChangeEvent, FC} from 'react';
import cx from 'classnames';
import {Box, BaseTextFieldProps, TextField as MuiInput} from '@mui/material';
// import Input from '@mui/material/Input';
//styles
import styles from './styles.module.scss';

interface InputProps extends Omit<BaseTextFieldProps, 'value' | 'defaultValue'> {
	// id?: string;
	// name?: string;
	// label?: string;
	// placeholder?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	// onFocus?: () => void;
	value?: string;
	defaultValue?: string;
	// autoFocus?: boolean;
	// disabled?: boolean;
	// className?: string;
	endDecorator?: React.ReactNode;
	slots?: {input?: React.ComponentType<any>};
	slotProps?: {input?: Record<string, any>};
	// sx?: Record<string, any>;
	// type?: string;
	isError?: boolean;
	maskChar?: any;
}

const Input: FC<InputProps> = ({
	// id,
	type = 'text',
	// name,
	// label,
	// onChange,
	// onFocus,
	// value,
	// autoFocus = false,
	// disabled = false,
	className,
	endDecorator,
	// slots = {},
	slotProps = {},
	sx = {},
	// placeholder,
	isError = false,
	maskChar,
	inputProps,
	...rest
}) => {
	const customInputProps = slotProps.input;

	return (
		<Box className={cx(className, styles.input)} sx={sx}>
			<MuiInput
				{...rest}
				// disabled={disabled}
				// id={id}
				// name={name}
				// onChange={onChange}
				// value={value}
				// autoFocus={autoFocus}
				inputProps={{...inputProps, ...customInputProps}}
				// onFocus={onFocus}
				// placeholder={placeholder}
				type={type}
				error={isError}
				// label={label}
			/>
			{endDecorator}
		</Box>
	);
};

export default Input;
