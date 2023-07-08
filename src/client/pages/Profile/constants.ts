import { RouteType } from '@common/types';

import { ProfileDashboard } from './ProfileDashboard';
import { ProfileLogin } from './ProfileLogin';
import { ProfileOrders } from './ProfileOrders';
import { ProfileRegister } from './ProfileRegister';
import { ProfileSettings } from './ProfileSettings';

export const PROFILE_ROUTES: Record<string, RouteType> = {
  login: {
    title: 'Войти в аккаунт',
    label: 'Вход',
    path: '/login',
    route: '/login/*',
    component: ProfileLogin,
  },
  register: {
    title: 'Регистрация аккаунта',
    label: 'Регистрация',
    path: '/register',
    component: ProfileRegister,
  },
  dashboard: {
    title: 'Профиль',
    label: 'Профиль',
    path: '',
    component: ProfileDashboard,
    isAuthorized: true,
  },
  settings: {
    title: 'Настройки профиля',
    label: 'Настройки профиля',
    path: '/settings',
    component: ProfileSettings,
    isAuthorized: true,
  },
  orders: {
    title: 'Мои заказы',
    label: 'Мои заказы',
    path: '/orders',
    component: ProfileOrders,
    isAuthorized: true,
  },
};
