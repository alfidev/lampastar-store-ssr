import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { RouteNotFound } from '@common/components/Routes';
import { useProfile } from '@common/hooks';
import { Button } from '@ui/components';

import { RegisterForm, Verification } from '../components';
import { REGISTER_FIELDS } from '../constants';
import { RegisterFormValuesType } from '../types';

export const Register = () => {
  const navigate = useNavigate();

  const { isAuthorized, register, isSuccessRegister, isErrorRegister, registerError, resetRegister } = useProfile();

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

  if (isErrorRegister) {
    return (
      <>
        <div>
          {
            // @ts-ignore
            registerError?.error
          }
        </div>
        <div>
          <Button.Contained onClick={resetRegister}>OK</Button.Contained>
        </div>
      </>
    );
  }

  if (isSuccessRegister)
    return <>Вы успешно зарегистрировали. На указанную почту было направлено письмо для подтверждения регистрации.</>;

  return (
    <Routes>
      <Route index element={<RegisterForm onSubmit={handleSubmit} />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  );
};
