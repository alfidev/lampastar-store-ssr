import React from 'react';
import { Routes as RoutesSwitch } from 'react-router';
import { Route } from 'react-router-dom';

import { RouteComponent } from '@common/components/RouteComponent';
import { RouteNotFound } from '@common/components/Routes';
import { ProfileNavigation } from '@modules/Profile';

import { PROFILE_ROUTES } from './constants';
import { ProfileContentContainer, ProfileSidebarContainer, ProfileWrapper } from './styled';

export const Profile = () => (
  <ProfileWrapper>
    <ProfileContentContainer>
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
    </ProfileContentContainer>
    <ProfileSidebarContainer>
      <ProfileNavigation />
    </ProfileSidebarContainer>
  </ProfileWrapper>
);
