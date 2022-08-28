import React, { ReactNode } from 'react';

import { Helmet } from 'react-helmet-async';

type Props = { children: ReactNode; title: string };

export const RouteComponent = ({ title, children }: Props) => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </>
);
