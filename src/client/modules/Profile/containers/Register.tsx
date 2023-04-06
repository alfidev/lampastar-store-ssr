import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useProfile } from '@common/hooks';

import { RegisterForm } from '../components';
import { REGISTER_FIELDS } from '../constants';
import { RegisterFormValuesType } from '../types';

export const Register = () => {
  const navigate = useNavigate();

  const { isAuthorized, register } = useProfile();

  useEffect(() => {
    if (isAuthorized) {
      navigate('/profile');
    }
  }, [isAuthorized, navigate]);

  const handleSubmit = (values: RegisterFormValuesType) => {
    const data = {
      firstname: values[REGISTER_FIELDS.FIRST_NAME],
      lastname: values[REGISTER_FIELDS.LAST_NAME],
      email: values[REGISTER_FIELDS.EMAIL],
      telephone: values[REGISTER_FIELDS.PHONE],
      password: values[REGISTER_FIELDS.NEW_PASSWORD],
      confirm: values[REGISTER_FIELDS.NEW_PASSWORD_CONFIRM],
      subscribe: values[REGISTER_FIELDS.SUBSCRIBE_NEWS],
      agree: values[REGISTER_FIELDS.ACCEPT_POLICY],
    };

    register(data);
  };

  if (isAuthorized) return null;

  return <RegisterForm onSubmit={handleSubmit} />;
};
