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
// icons
import {ReactComponent as CheckedError} from '@icons/close_big.svg';
//types
import {Color} from '@/utils/types';
//utils
import {BUTTON_LABELS, COLORS} from '@/utils/constants';
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
	color?: Color;
	children?: ReactNode;
}

const Dialog: FC<ExtendedDialogProps> = ({
	color = COLORS.PRIMARY,
	isShowCloseIcon = true,
	isShowCloseButton = false,
	closeButtonTitle = BUTTON_LABELS.CLOSE,
	saveButtonTitle = BUTTON_LABELS.SAVE,
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
						<IconButton aria-label="close" onClick={onClose} className={styles.dialog__icon_close}>
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
							<Button color={color} variant="outline" autoFocus onClick={onClose}>
								{closeButtonTitle}
							</Button>
						)}
						<Button className={styles.dialog__actions__button_main} color={color} autoFocus onClick={onClose}>
							{saveButtonTitle}
						</Button>
					</Box>
				</Box>
			</MuiDialog>
		</Box>
	);
};

export default Dialog;
