'use client';

import React from 'react';

import { PageTitle } from '@layouts/Lampastar';
import { Verification } from '@modules/Profile';
import { Col, Container, Row } from '@ui/components';

export const ProfileVerificationPage = () => (
  <>
    <PageTitle>Регистрация нового аккаунта</PageTitle>
    <Container>
      <Row>
        <Col tablet={12}>
          <Verification />
        </Col>
      </Row>
    </Container>
  </>
);
