import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useProfile } from '@common/hooks';
import { Tabs } from '@ui/components';

import { LoginEmailForm, LoginPhoneForm } from '../components';

type LoginDataType = { telephone?: string; email?: string; password: string };
export const Login = () => {
  const navigate = useNavigate();

  const { isAuthorized, login } = useProfile();

  useEffect(() => {
    if (isAuthorized) {
      navigate('/profile');
    }
  }, [isAuthorized, navigate]);

  const handleSubmit = (values: LoginDataType) => {
    login(values);
  };

  if (isAuthorized) return null;

  const tabs = [
    {
      label: 'По номеру телефона',
      content: <LoginPhoneForm onSubmit={handleSubmit} />,
    },
    {
      label: 'По e-mail',
      content: <LoginEmailForm onSubmit={handleSubmit} />,
    },
  ];

  return <Tabs tabs={tabs} />;
};
