import React from 'react';
import { Routes as RoutesSwitch } from 'react-router';
import { Route } from 'react-router-dom';

import { RouteComponent } from '@common/components/RouteComponent';
import { RouteNotFound } from '@common/components/Routes';
import { ProfileNavigation } from '@modules/Profile';
import { Container, Row, Col } from '@ui/components';

import { PROFILE_ROUTES } from './constants';

export const Profile = () => {
  return (
    <Container>
      <Row>
        <Col tablet={9}>
          <RoutesSwitch>
            {Object.values(PROFILE_ROUTES).map(({ path, route, title, component: Component, isAuthorized }) => (
              <Route
                key={path}
                path={route || path}
                element={
                  <RouteComponent title={title} isAuthorized={isAuthorized}>
                    <Component />
                  </RouteComponent>
                }
              />
            ))}
            <Route path="*" element={<RouteNotFound />} />
          </RoutesSwitch>
        </Col>
        <Col tablet={3}>
          <ProfileNavigation />
        </Col>
      </Row>
    </Container>
  );
};
