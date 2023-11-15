import React from 'react';

import { PageTitle } from '@layouts/Lampastar';
import { Forgot } from '@modules/Profile';
import { Container, Row, Col } from '@ui/components';

export const ProfileForgotPage = () => (
  <>
    <PageTitle>Вход в личный кабинет</PageTitle>
    <Container>
      <Row>
        <Col tablet={6}>
          <Forgot />
        </Col>
      </Row>
    </Container>
  </>
);
