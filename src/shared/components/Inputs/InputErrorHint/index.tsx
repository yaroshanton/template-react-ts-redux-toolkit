import {FC} from 'react';
import cx from 'classnames';
//styles
import styles from './InputErrorHint.module.scss';

type InputErrorHintProps = {
	text: string;
	checkbox?: boolean;
	className?: string;
};

const InputErrorHint: FC<InputErrorHintProps> = ({text, checkbox, className}) => {
	return <span className={cx(styles.error, className && className, {[styles.error_checkbox]: checkbox})}>{text}</span>;
};

export default InputErrorHint;
