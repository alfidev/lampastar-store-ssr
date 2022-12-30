import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useProfile } from '@common/hooks';
import { List, ListItem, Card } from '@ui/components';

import { PROFILE_ROUTES } from '../../../pages/Profile/constants';

const LogoutListItem = styled(ListItem)`
  background: ${({ theme }) => theme.color.buttons.secondary};
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const ProfileNavigation = () => {
  const { isAuthorized, logout } = useProfile();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleOnClick = (path: string) => {
    navigate('/profile' + path);
  };

  return (
    <Card>
      <List>
        {Object.values(PROFILE_ROUTES)
          .filter(({ isAuthorized: isAuthorizedPath }) => !!isAuthorizedPath === isAuthorized)
          .map(({ label, path }) => (
            <ListItem key={path} onClick={() => handleOnClick(path)} active={pathname === '/profile' + path}>
              {label}
            </ListItem>
          ))}
        {isAuthorized && <LogoutListItem onClick={() => logout()}>Выход</LogoutListItem>}
      </List>
    </Card>
  );
};
