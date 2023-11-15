'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import { useProfile } from '../../../common/hooks';
import { Tabs } from '../../../ui/components';
import { LoginEmailForm, LoginPhoneForm } from '../components';

type LoginDataType = { telephone?: string; email?: string; password: string };
export const Login = () => {
  const router = useRouter();

  const { isAuthorized, login } = useProfile();

  useEffect(() => {
    if (isAuthorized) {
      router.push('/profile');
    }
  }, [isAuthorized, router]);

  const handleSubmit = (values: LoginDataType) => {
    login(values);
  };

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

  return <Tabs tabs={tabs} />;
};
