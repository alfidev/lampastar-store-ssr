import React from 'react';

import { Divider } from './styled';
import { locale } from './locale';

import { PageTitle } from '@layouts/Lampastar';
import { Staff } from '@modules/Staff';

const { title } = locale;

export const OurTeam = () => {
  return (
    <>
      <PageTitle>{title}</PageTitle>
      <Divider />
      <Staff />
    </>
  );
};
