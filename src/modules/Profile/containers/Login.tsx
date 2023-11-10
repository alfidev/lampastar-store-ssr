import { Route, Routes, useNavigate } from 'next/navigation';
import React, { useEffect } from 'react';

import { RouteNotFound } from '../../../common/components/Routes';
import { useProfile } from '../../../common/hooks';
import { Tabs } from '../../../ui/components';
import { ForgotForm, LoginEmailForm, LoginPhoneForm } from '../components';

type LoginDataType = { telephone?: string; email?: string; password: string };
export const Login = () => {
  const router = useRouter();

  const { isAuthorized, login } = useProfile();

  useEffect(() => {
    if (isAuthorized) {
      router.push('/profile');
    }
  }, [isAuthorized, navigate]);

  const handleSubmit = (values: LoginDataType) => {
    login(values);
  };

  const goToLogin = () => router.push('');

  const goToForgotPassword = () => router.push('forgot');

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
      <Route path="forgot" element={<ForgotForm goToLogin={goToLogin} />} />
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  );
};
