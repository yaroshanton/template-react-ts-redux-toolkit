import * as Yup from 'yup';

export const phoneSchema = Yup.string().required('Phone is required').min(6).max(15);

export const passwordSchema = Yup.string()
	.required('Password is required')
	.min(8, 'Minimum password value 8 characters')
	.max(30, 'Maximum password value 30 characters');

export const emailSchema = Yup.string()
	.required('Email is required')
	.test('email is valid', 'Invalid email format', (value) => {
		if (value?.toLowerCase().match(validateEmailSchema)) return true;
		return false;
	});

export const descriptionSchema = Yup.string()
	.required('Description is required')
	.min(5, 'Minimum description value 5 characters')
	.max(300, 'Maximum description value 5 characters');

export const imagesSchema = Yup.array().nullable().required('photo').min(1, 'Photo is required');

export const validateEmailSchema = new RegExp(
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
