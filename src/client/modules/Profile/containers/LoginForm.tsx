import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Field, FieldMobile } from '@common/components/Field';
import { useProfile } from '@common/hooks';
import { Button, Tab, Tabs } from '@ui/components';

import { FIELD_EMAIL, FIELD_PHONE, FIELD_PASSWORD } from '../constants';
import { loginEmailValidationSchema, loginPhoneValidationSchema } from '../utils';

const loginInitialValues = {
  [FIELD_EMAIL]: '',
  [FIELD_PHONE]: '',
  [FIELD_PASSWORD]: '',
};

const StyledButton = styled(Button.Contained)`
  margin-top: ${({ theme }) => theme.indents.m};
`;

type LoginDataType = { telephone?: string; email?: string; password: string };

type FormProps = {
  onSubmit: (data: LoginDataType) => void;
};

export const LoginPhoneForm = ({ onSubmit }: FormProps) => {
  const handleSubmit = (values: typeof loginInitialValues) => {
    const data = {
      telephone: values[FIELD_PHONE],
      password: values[FIELD_PASSWORD],
    };

    onSubmit(data);
  };

  return (
    <Formik initialValues={loginInitialValues} validationSchema={loginPhoneValidationSchema} onSubmit={handleSubmit}>
      {({ isValid, touched }) => {
        const isTouched = touched[FIELD_PHONE] || touched[FIELD_PASSWORD];

        return (
          <Form>
            <Tab>
              <FieldMobile name={FIELD_PHONE} label="Телефон" placeholder="Телефон" type="tel" />
              <Field name={FIELD_PASSWORD} label="Пароль" placeholder="Пароль" type="password" />
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

export const LoginEmailForm = ({ onSubmit }: FormProps) => {
  const handleSubmit = (values: typeof loginInitialValues) => {
    const data = {
      email: values[FIELD_EMAIL],
      password: values[FIELD_PASSWORD],
    };

    onSubmit(data);
  };

  return (
    <Formik initialValues={loginInitialValues} validationSchema={loginEmailValidationSchema} onSubmit={handleSubmit}>
      {({ isValid, touched }) => {
        const isTouched = touched[FIELD_EMAIL] || touched[FIELD_PASSWORD];

        return (
          <Form>
            <Tab>
              <Field name={FIELD_EMAIL} label="E-mail" placeholder="E-mail" type="text" />
              <Field name={FIELD_PASSWORD} label="Пароль" placeholder="Пароль" type="password" />
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

export const LoginForm = () => {
  const navigate = useNavigate();

  const { isAuthorized, login } = useProfile();

  useEffect(() => {
    if (isAuthorized) {
      navigate('/profile');
    }
  }, [isAuthorized, navigate]);

  const handleSubmit = (values: LoginDataType) => {
    login(values);
  };

  if (isAuthorized) return null;

  const tabs = [
    {
      label: 'По номеру телефона',
      content: <LoginPhoneForm onSubmit={handleSubmit} />,
    },
    {
      label: 'По e-mail',
      content: <LoginEmailForm onSubmit={handleSubmit} />,
    },
  ];

  return <Tabs tabs={tabs} />;
};
