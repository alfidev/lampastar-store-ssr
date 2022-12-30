import React from 'react';

import { PageTitle } from '@layouts/Lampastar';
import { RegisterForm } from '@modules/Profile';
import { Col, Container, Row } from '@ui/components';

export const ProfileRegister = () => {
  return (
    <>
      <PageTitle>Регистрация нового аккаунта</PageTitle>
      <Container>
        <Row>
          <Col tablet={12}>
            <RegisterForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};
