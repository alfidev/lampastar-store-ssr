import * as yup from 'yup';

import { validatePhone } from '../../../common/utils';

import { MESSAGE_FIELDS, TELEPHONE_FIELD } from '../constants';

export const messageValidationSchema = yup.object().shape({
  [MESSAGE_FIELDS.NAME]: yup.string().required('Введите имя').max(32, 'Длинна имя не должна превышать 32 символов'),
  [MESSAGE_FIELDS.EMAIL]: yup.string().required('Введите email').email('Неправильный email'),
  [MESSAGE_FIELDS.MESSAGE]: yup.string().required('Введите сообщение'),
  [MESSAGE_FIELDS.AGREE]: yup.boolean().oneOf([true], 'Нужно согласие'),
});
export const callMeValidationSchema = yup.object().shape({
  [TELEPHONE_FIELD]: validatePhone(),
});
