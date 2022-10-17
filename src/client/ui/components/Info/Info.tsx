import React, { ReactNode } from 'react';
import { InfoCard } from '@ui/components/Info/styled';

type Props = {
  children: ReactNode;
};

export const Info = ({ children }: Props) => {
  return <InfoCard info>{children}</InfoCard>;
};
