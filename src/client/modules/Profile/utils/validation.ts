import * as yup from 'yup';

import {
  FIELD_ACCEPT_POLICY,
  FIELD_EMAIL,
  FIELD_FIRST_NAME,
  FIELD_LAST_NAME,
  FIELD_NEW_PASSWORD,
  FIELD_NEW_PASSWORD_CONFIRM,
  FIELD_PASSWORD,
  FIELD_PHONE,
} from '../constants';

const phoneRegExp = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

export const loginPhoneValidationSchema = yup.object().shape({
  [FIELD_PHONE]: yup.string().matches(phoneRegExp, 'Неверный номер телефона').required('Введите номер телефона'),
  [FIELD_PASSWORD]: yup.string().required('Введите пароль'),
});

export const loginEmailValidationSchema = yup.object().shape({
  [FIELD_EMAIL]: yup.string().email('Неправильный email').required('Введите email'),
  [FIELD_PASSWORD]: yup.string().required('Введите пароль'),
});

export const registerValidationSchema = yup.object().shape({
  [FIELD_FIRST_NAME]: yup.string().required('Введите имя').max(32, 'Длинна имя не должна превышать 32 символов'),
  [FIELD_LAST_NAME]: yup.string().max(32, 'Длинна фамилии не должна превышать 32 символов'),
  [FIELD_EMAIL]: yup.string().email('Неправильный email').required('Введите email'),
  [FIELD_PHONE]: yup.string().matches(phoneRegExp, 'Неверный номер телефона').required('Введите номер телефона'),
  [FIELD_NEW_PASSWORD]: yup
    .string()
    .required('Введите пароль')
    .min(6, 'Длинна пароля не менее 6 символов')
    .max(30, 'Длинна пароля не должна превышать 30 символов'),
  [FIELD_NEW_PASSWORD_CONFIRM]: yup
    .string()
    .required('Введите пароль повторно')
    .oneOf([yup.ref(FIELD_NEW_PASSWORD)], 'Пароли не совпадают'),
  [FIELD_ACCEPT_POLICY]: yup
    .boolean()
    .required('Введите пароль')
    .oneOf([true], 'Нужно соглашение с политикой конфиденциальности'),
});

export const sdafasdf = 4;
