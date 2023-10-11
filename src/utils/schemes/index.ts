import * as Yup from 'yup';

export const phoneSchema = Yup.string().required('required.phone').min(6).max(15);

export const passwordSchema = Yup.string()
	.required('required.password')
	.min(8, 'characters.passwordLast')
	.max(30, 'characters.surnameMaximum');

export const emailSchema = Yup.string()
	.required('required.email')
	.test('email is valid', 'notValid.emailFormat', (value) => {
		if (value?.toLowerCase().match(validateEmailSchema)) return true;
		return false;
	});

export const descriptionSchema = Yup.string()
	.required('required.description')
	.min(5, 'characters.descriptionMinimum')
	.max(300, 'characters.descriptionMaximum');

export const imagesSchema = Yup.array().nullable().required('required.photo').min(1, 'required.photo');

export const validateEmailSchema = new RegExp(
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
