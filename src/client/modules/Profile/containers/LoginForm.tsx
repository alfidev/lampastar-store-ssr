import { Form, Formik } from 'formik';
import React from 'react';

import { Field } from '@common/components/Field';

import { FIELD_LOGIN, FIELD_PASSWORD } from '../constants';
import { loginValidationSchema } from '../utils';

const loginInitialValues = {
  [FIELD_LOGIN]: '',
  [FIELD_PASSWORD]: '',
};

export const LoginForm = () => {
  return (
    <Formik
      initialValues={loginInitialValues}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <Field validation name={FIELD_LOGIN} label="E-mail" placeholder="E-mail" type="text" />
        <Field validation name={FIELD_PASSWORD} label="Пароль" placeholder="Пароль" type="password" />
      </Form>
    </Formik>
  );
};
