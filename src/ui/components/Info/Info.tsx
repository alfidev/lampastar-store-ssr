import React, { ReactNode } from 'react';
import { InfoCard } from './styled';

type Props = {
  children: ReactNode;
};

export const Info = ({ children }: Props) => {
  return <InfoCard info>{children}</InfoCard>;
};
