import React from 'react';

import { PageTitle } from '@layouts/Lampastar';
import { Register } from '@modules/Profile';
import { Col, Container, Row } from '@ui/components';

export const ProfileRegister = () => (
  <>
    <PageTitle>Регистрация нового аккаунта</PageTitle>
    <Container>
      <Row>
        <Col tablet={12}>
          <Register />
        </Col>
      </Row>
    </Container>
  </>
);
