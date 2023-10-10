import * as Yup from 'yup';

export const registrationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required('Поле обов\'язкове')
    .matches(/^\+380\d{9}$/, 'Неправильний формат'),
  smsCode: Yup.string()
    .required('Поле обов\'язкове')
    .matches(/\d{4}$/, 'Неправильний формат'),
  firstName: Yup.string().required('Поле обов\'язкове'),
  lastName: Yup.string().required('Поле обов\'язкове'),
});
