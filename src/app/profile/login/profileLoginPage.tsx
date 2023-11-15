import React from 'react';

import { PageTitle } from '@layouts/Lampastar';
import { Login } from '@modules/Profile';
import { Container, Row, Col } from '@ui/components';

export const ProfileLoginPage = () => (
  <>
    <PageTitle>Вход в личный кабинет</PageTitle>
    <Container>
      <Row>
        <Col tablet={6}>
          <Login />
        </Col>
      </Row>
    </Container>
  </>
);
