import { Omit } from '@reduxjs/toolkit/dist/tsHelpers';
import { Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';

import { Field, FieldMobile } from '@common/components/Field';
import { LoginFormValuesType } from '@modules/Profile/types';
import { Button, Tab } from '@ui/components';

import { LOGIN_FIELDS } from '../constants';
import { loginEmailValidationSchema, loginPhoneValidationSchema } from '../utils';

const loginInitialValues = {
  [LOGIN_FIELDS.EMAIL]: '',
  [LOGIN_FIELDS.PHONE]: '',
  [LOGIN_FIELDS.PASSWORD]: '',
};

const StyledButton = styled(Button.Contained)`
  margin-top: ${({ theme }) => theme.indents.m};
`;

type FormPhoneProps = {
  onSubmit: (data: Omit<LoginFormValuesType, LOGIN_FIELDS.EMAIL>) => void;
};

type FormEmailProps = {
  onSubmit: (data: Omit<LoginFormValuesType, LOGIN_FIELDS.PHONE>) => void;
};

export const LoginPhoneForm = ({ onSubmit }: FormPhoneProps) => {
  const handleSubmit = (values: LoginFormValuesType) => {
    const { [LOGIN_FIELDS.EMAIL]: email, ...data } = values;

    onSubmit(data);
  };

  return (
    <Formik initialValues={loginInitialValues} validationSchema={loginPhoneValidationSchema} onSubmit={handleSubmit}>
      {({ isValid, touched }) => {
        const isTouched = touched[LOGIN_FIELDS.PHONE] || touched[LOGIN_FIELDS.PASSWORD];

        return (
          <Form>
            <Tab>
              <FieldMobile name={LOGIN_FIELDS.PHONE} label="Телефон" placeholder="Телефон" type="tel" />
              <Field name={LOGIN_FIELDS.PASSWORD} label="Пароль" placeholder="Пароль" type="password" />
            </Tab>
            <StyledButton type="submit" disabled={!isValid || !isTouched}>
              Войти
            </StyledButton>
          </Form>
        );
      }}
    </Formik>
  );
};

export const LoginEmailForm = ({ onSubmit }: FormEmailProps) => {
  const handleSubmit = (values: LoginFormValuesType) => {
    const { [LOGIN_FIELDS.PHONE]: telephone, ...data } = values;

    onSubmit(data);
  };

  return (
    <Formik initialValues={loginInitialValues} validationSchema={loginEmailValidationSchema} onSubmit={handleSubmit}>
      {({ isValid, touched }) => {
        const isTouched = touched[LOGIN_FIELDS.EMAIL] || touched[LOGIN_FIELDS.PASSWORD];

        return (
          <Form>
            <Tab>
              <Field name={LOGIN_FIELDS.EMAIL} label="E-mail" placeholder="E-mail" type="text" />
              <Field name={LOGIN_FIELDS.PASSWORD} label="Пароль" placeholder="Пароль" type="password" />
            </Tab>
            <StyledButton type="submit" disabled={!isValid || !isTouched}>
              Войти
            </StyledButton>
          </Form>
        );
      }}
    </Formik>
  );
};