import * as Yup from 'yup';
import { APARTMENT_ACCOUNT_ID_CHARS_LENGTH } from 'utils/constants';

export const createApartmentValidationSchema = Yup.object().shape({
	apartmentAccountId: Yup.string()
		.min(APARTMENT_ACCOUNT_ID_CHARS_LENGTH, `HOST ID має містити ${APARTMENT_ACCOUNT_ID_CHARS_LENGTH} цифр`)
		.required("HOST ID обов'язкове поле"),
	providerAccountId: Yup.string().required("Особовий рахунок обов'язкове поле"),
	address: Yup.string().required("Адреса обов'язкове поле"),
	flat: Yup.string().required("Номер квартири обов'язкове поле"),
});
