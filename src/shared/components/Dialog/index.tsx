import {FC, ReactElement, ReactNode} from 'react';
import cx from 'classnames';
//mui
import {
	Dialog as MuiDialog,
	DialogProps,
	DialogTitle,
	IconButton,
	DialogContent,
	Box,
	DialogContentText,
} from '@mui/material';
//components
import Button from '@components/Button';
//icons
import {ReactComponent as CheckedError} from '@icons/close_big.svg';
//types
import {DefaultButtonColor} from '@/utils/types';
//constants
import {CLOSE, OUTLINE, SAVE} from '@/utils/constants';
//styles
import styles from './styles.module.scss';

export interface ExtendedDialogProps extends DialogProps {
	title: string;
	text: string;
	onClose: () => void;
	mainIcon?: ReactElement;
	isShowCloseIcon?: boolean;
	isShowCloseButton?: boolean;
	closeButtonTitle?: string;
	saveButtonTitle?: string;
	color?: DefaultButtonColor;
	children?: ReactNode;
}

const Dialog: FC<ExtendedDialogProps> = ({
	color,
	isShowCloseIcon = true,
	isShowCloseButton = false,
	closeButtonTitle = CLOSE,
	saveButtonTitle = SAVE,
	children,
	title,
	text,
	mainIcon,
	className,
	onClose,
	...rest
}) => {
	return (
		<Box className={cx(className, styles.dialog__wrap)}>
			<MuiDialog
				{...rest}
				fullWidth
				onClose={onClose}
				classes={{
					scrollPaper: styles.scroll__paper,
				}}
			>
				<Box className={styles.dialog}>
					{isShowCloseIcon && (
						<IconButton aria-label={CLOSE} onClick={onClose} className={styles.dialog__icon_close}>
							<CheckedError />
						</IconButton>
					)}

					{mainIcon && <Box className={styles.dialog__icon}>{mainIcon}</Box>}

					<DialogContent className={styles.dialog__content}>
						<DialogTitle className={styles.dialog__content__title}>{title}</DialogTitle>
						<DialogContentText className={styles.dialog__content__text}>{text}</DialogContentText>
						{children}
					</DialogContent>

					<Box className={styles.dialog__actions}>
						{isShowCloseButton && (
							<Button title={closeButtonTitle} color={color} variant={OUTLINE} autoFocus onClick={onClose} />
						)}

						<Button
							title={saveButtonTitle}
							className={styles.dialog__actions__button_main}
							color={color}
							autoFocus
							onClick={onClose}
						/>
					</Box>
				</Box>
			</MuiDialog>
		</Box>
	);
};

export default Dialog;
