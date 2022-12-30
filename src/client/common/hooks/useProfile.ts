import { useMutation, useQuery, useQueryClient } from 'react-query';

import { getQueryRequest } from '@common/utils';

type RegisterOrLoginResponseType = {
  success: string;
};

type RegisterOrLoginRequestType = {
  [p: string]: any;
};

const CHECK_AUTHORIZE_API = '/profile/login/check';
const LOGOUT_PROFILE_API = '/profile/login/logout';
const REGISTER_PROFILE_API = '/profile/register';
const LOGIN_PROFILE_API = '/profile/login';

const registerOptions = {
  url: REGISTER_PROFILE_API,
  method: 'POST',
};

const loginOptions = {
  url: LOGIN_PROFILE_API,
  method: 'POST',
};

const logoutOptions = {
  url: LOGOUT_PROFILE_API,
};

export const useProfile = () => {
  const queryClient = useQueryClient();

  const { isSuccess, isError } = useQuery([CHECK_AUTHORIZE_API], getQueryRequest(), {
    refetchInterval: 30 * 1000,
  });

  const { mutateAsync: registerAsync } = useMutation(
    getQueryRequest<RegisterOrLoginResponseType, RegisterOrLoginRequestType>(registerOptions),
  );

  const { mutateAsync: loginAsync } = useMutation(
    getQueryRequest<RegisterOrLoginResponseType, RegisterOrLoginRequestType>(loginOptions),
  );

  const { mutateAsync: logoutAsync } = useMutation(getQueryRequest(logoutOptions));

  const invalidate = () => {
    return queryClient.invalidateQueries([CHECK_AUTHORIZE_API]);
  };

  const logout = () => {
    logoutAsync({})
      .then(() => invalidate())
      .catch(() => console.log('Logout error'));
  };

  const register = (data: any) => {
    registerAsync(data)
      .then(() => invalidate())
      .catch(() => console.log('Register error'));
  };

  const login = (data: any) => {
    loginAsync(data)
      .then(() => invalidate())
      .catch(() => console.log('Login error'));
  };

  return { isAuthorized: isSuccess && !isError, invalidate, logout, register, login };
};
