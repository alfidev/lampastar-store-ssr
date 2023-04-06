import React from 'react';

import { PageTitle } from '@layouts/Lampastar';
import { ProfileSettings as ProfileSettingsContainer } from '@modules/Profile';

export const ProfileSettings = () => (
  <>
    <PageTitle>Настройки профиля</PageTitle>
    <ProfileSettingsContainer />
  </>
);
