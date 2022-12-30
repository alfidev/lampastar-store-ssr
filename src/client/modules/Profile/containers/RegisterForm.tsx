import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Field, FieldCheckbox, FieldMobile } from '@common/components/Field';
import { useProfile } from '@common/hooks';
import { Button } from '@ui/components';
import { Container, Row, Col } from '@ui/components';

import {
  FIELD_FIRST_NAME,
  FIELD_LAST_NAME,
  FIELD_EMAIL,
  FIELD_PHONE,
  FIELD_NEW_PASSWORD,
  FIELD_NEW_PASSWORD_CONFIRM,
  FIELD_ACCEPT_POLICY,
  FIELD_SUBSCRIBE_NEWS,
} from '../constants';
import { registerValidationSchema } from '../utils';

const registerInitialValues = {
  [FIELD_FIRST_NAME]: '',
  [FIELD_LAST_NAME]: '',
  [FIELD_EMAIL]: '',
  [FIELD_PHONE]: '',
  [FIELD_NEW_PASSWORD]: '',
  [FIELD_NEW_PASSWORD_CONFIRM]: '',
  [FIELD_SUBSCRIBE_NEWS]: true,
  [FIELD_ACCEPT_POLICY]: false,
};

const StyledButton = styled(Button.Contained)`
  margin-top: ${({ theme }) => theme.indents.l};
`;

export const RegisterForm = () => {
  const navigate = useNavigate();

  const { isAuthorized, register } = useProfile();

  useEffect(() => {
    if (isAuthorized) {
      navigate('/profile');
    }
  }, [isAuthorized]);

  const handleSubmit = (values: typeof registerInitialValues) => {
    const data = {
      firstname: values[FIELD_FIRST_NAME],
      lastname: values[FIELD_LAST_NAME],
      email: values[FIELD_EMAIL],
      telephone: values[FIELD_PHONE],
      password: values[FIELD_NEW_PASSWORD],
      confirm: values[FIELD_NEW_PASSWORD_CONFIRM],
      subscribe: values[FIELD_SUBSCRIBE_NEWS],
      agree: values[FIELD_ACCEPT_POLICY],
    };

    register(data);
  };

  if (isAuthorized) return null;

  return (
    <Formik initialValues={registerInitialValues} validationSchema={registerValidationSchema} onSubmit={handleSubmit}>
      <Form>
        <Container>
          <Row>
            <Col desktopS={6}>
              <Field validation name={FIELD_FIRST_NAME} label="Имя" placeholder="Имя" type="text" />
            </Col>
            <Col desktopS={6}>
              <Field name={FIELD_LAST_NAME} label="Фамилия" placeholder="Фамилия" type="text" />
            </Col>
            <Col desktopS={6}>
              <Field validation name={FIELD_EMAIL} label="E-mail" placeholder="E-mail" type="email" />
            </Col>
            <Col desktopS={6}>
              <FieldMobile validation name={FIELD_PHONE} label="Телефон" placeholder="Телефон" type="tel" />
            </Col>
            <Col desktopS={6}>
              <Field validation name={FIELD_NEW_PASSWORD} label="Пароль" placeholder="Пароль" type="password" />
            </Col>
            <Col desktopS={6}>
              <Field
                validation
                name={FIELD_NEW_PASSWORD_CONFIRM}
                label="Подтверждение пароля"
                placeholder="Подтверждение пароля"
                type="password"
              />
            </Col>
            <Col desktopS={6}></Col>
          </Row>
          <Row>
            <Col>
              <FieldCheckbox
                name={FIELD_SUBSCRIBE_NEWS}
                label="Получать новости"
                text="Вы будете получать на почту самые актуальные и выгодные предложения"
              />
            </Col>
            <Col>
              <FieldCheckbox
                validation
                name={FIELD_ACCEPT_POLICY}
                label="Согласие с обработкой персональных данных и политикой конфиденциальности"
                text={
                  <>
                    Я прочитал&nbsp;
                    <a href="/policy" target="_blank">
                      Политика Безопасности
                    </a>{' '}
                    и согласен с условиями безопасности и обработки персональных данных
                  </>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <StyledButton type="submit">Продолжить</StyledButton>
            </Col>
          </Row>
        </Container>
      </Form>
    </Formik>
  );
};
