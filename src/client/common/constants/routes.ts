import {
  About,
  ApplicationSettings,
  Catalog,
  Contacts,
  OurTeam,
  PaymentAndDelivery,
  Home,
  News,
  Profile,
  Basket,
  Order,
} from '@pages';

import { RouteType } from '../types';

export const ROUTES: Record<string, RouteType> = {
  home: {
    title: 'ВЕСЬ СВЕТ',
    label: 'Главная',
    path: '',
    component: Home,
  },
  catalog: {
    title: 'Каталог товаров',
    label: 'Каталог',
    path: '/catalog',
    route: '/catalog/*',
    component: Catalog,
  },
  profile: {
    title: 'Страница профиля',
    label: 'Профиль',
    path: '/profile',
    route: '/profile/*',
    component: Profile,
  },
  paymentAndDelivery: {
    title: 'Оплата и доставка',
    label: 'Оплата и доставка',
    path: '/payment-and-delivery',
    component: PaymentAndDelivery,
  },
  contacts: {
    title: 'Контакты',
    label: 'Контакты',
    path: '/contacts',
    component: Contacts,
  },
  favourites: {
    title: 'Избранное',
    label: 'Избранное',
    path: '/favourites',
    component: Catalog,
  },
  basket: {
    title: 'Корзина',
    label: 'Корзина',
    path: '/basket',
    component: Basket,
  },
  order: {
    title: 'Оформление заказа',
    label: 'Оформление заказа',
    path: '/order/*',
    component: Order,
  },
  news: {
    title: 'Новости',
    label: 'Новости',
    path: '/news',
    route: '/news/*',
    component: News,
  },
  about: {
    title: 'Кто мы',
    label: 'Кто мы',
    path: '/about',
    component: About,
  },
  ourTeam: {
    title: 'Наша команда',
    label: 'Наша команда',
    path: '/our-team',
    component: OurTeam,
  },
  reviews: {
    title: 'Отзывы',
    label: 'Отзывы',
    path: '/reviews',
    component: Catalog,
  },
  settings: {
    title: 'Настройки приложения',
    label: 'Настройки приложения',
    path: '/settings',
    component: ApplicationSettings,
  },
};
