import React, { ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import { useProfile } from '@common/hooks';

type Props = { children: ReactNode; title: string; isAuthorized?: boolean };

export const RouteComponent = ({ title, children, isAuthorized }: Props) => {
  const { isAuthorized: isAuthorizedUser, isLoading } = useProfile();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthorized && !isAuthorizedUser && !isLoading) {
      navigate('/profile/login');
    }
  }, [isAuthorized, isAuthorizedUser, isLoading]);

  if (isAuthorized && !isAuthorizedUser) return null;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
};
