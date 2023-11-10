import { useLocation } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

import { useProfile } from '../../../common/hooks';
import { List, ListItem, Card } from '../../../ui/components';

const LogoutListItem = styled(ListItem)`
  background: ${({ theme }) => theme.color.buttons.secondary};
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const ProfileNavigation = () => {
  const { isAuthorized, logout } = useProfile();
  const router = useRouter();
  const { pathname } = useLocation();

  const handleOnClick = (path: string) => {
    router.push(`/profile${path}`);
  };

  return (
    <Card>
      <List>
        {/* {Object.values(PROFILE_ROUTES) */}
        {/*  .filter(({ isAuthorized: isAuthorizedPath }) => !!isAuthorizedPath === isAuthorized) */}
        {/*  .map(({ label, path }) => ( */}
        {/*    <ListItem key={path} onClick={() => handleOnClick(path)} active={pathname === `/profile${path}`}> */}
        {/*      {label} */}
        {/*    </ListItem> */}
        {/*  ))} */}
        {/* {isAuthorized && <LogoutListItem onClick={() => logout()}>Выход</LogoutListItem>} */}
      </List>
    </Card>
  );
};
