import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { useProfile } from '@common/hooks';
import { Tabs } from '@ui/components';

import { ForgotForm, LoginEmailForm, LoginPhoneForm } from '../components';

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

  const goToLogin = () => navigate('');

  const goToForgotPassword = () => navigate('forgot');

  if (isAuthorized) return null;

  const tabs = [
    {
      label: 'По номеру телефона',
      content: <LoginPhoneForm onSubmit={handleSubmit} forgotPassword={goToForgotPassword} />,
    },
    {
      label: 'По e-mail',
      content: <LoginEmailForm onSubmit={handleSubmit} forgotPassword={goToForgotPassword} />,
    },
  ];

  return (
    <Routes>
      <Route index element={<Tabs tabs={tabs} />} />
      <Route path="/forgot" element={<ForgotForm goToLogin={goToLogin} />} />
    </Routes>
  );
};
