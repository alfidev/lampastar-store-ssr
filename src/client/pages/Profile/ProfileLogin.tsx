import React from 'react';

import { PageTitle } from '@layouts/Lampastar';
import { LoginForm } from '@modules/Profile';
import { Container, Row, Col } from '@ui/components';

export const ProfileLogin = () => {
  return (
    <>
      <PageTitle>Вход в личный кабинет</PageTitle>
      <Container>
        <Row>
          <Col tablet={6}>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};
