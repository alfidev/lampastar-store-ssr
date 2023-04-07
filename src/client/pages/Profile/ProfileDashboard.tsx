import React from 'react';

import { PageTitle } from '@layouts/Lampastar';
import { ProfileDashboard as ProfileDashboardContainer } from '@modules/Profile';

export const ProfileDashboard = () => (
  <>
    <PageTitle>Dashboard</PageTitle>
    <ProfileDashboardContainer />
  </>
);
