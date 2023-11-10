import * as yup from 'yup';

const phoneRegExp = /\d{10}/;

export const validatePhone = () =>
  yup.string().required('Введите номер телефона').matches(phoneRegExp, 'Неверный номер телефона');
