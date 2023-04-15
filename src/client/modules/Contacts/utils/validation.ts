import * as yup from 'yup';

import { MESSAGE_FIELDS } from '../constants';

export const messageValidationSchema = yup.object().shape({
  [MESSAGE_FIELDS.NAME]: yup.string().required('Введите имя').max(32, 'Длинна имя не должна превышать 32 символов'),
  [MESSAGE_FIELDS.EMAIL]: yup.string().required('Введите email').email('Неправильный email'),
  [MESSAGE_FIELDS.MESSAGE]: yup.string().required('Введите сообщение'),
  [MESSAGE_FIELDS.AGREE]: yup.boolean().oneOf([true], 'Нужно согласие'),
});
