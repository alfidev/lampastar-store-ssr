import React from 'react';

import { PageTitle } from '@layouts/Lampastar';
import { ProfileOrders as ProfileOrdersContainer } from '@modules/Profile';

export const ProfileOrders = () => (
  <>
    <PageTitle>Мои заказы</PageTitle>
    <ProfileOrdersContainer />
  </>
);
