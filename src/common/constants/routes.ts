import { RouteType } from '../types';

export const ROUTES: Record<string, RouteType> = {
  home: {
    title: 'ВЕСЬ СВЕТ',
    label: 'Главная',
    path: '/',
  },
  catalog: {
    title: 'Каталог товаров',
    label: 'Каталог',
    path: '/catalog',
  },
  profile: {
    title: 'Страница профиля',
    label: 'Профиль',
    path: '/profile',
  },
  paymentAndDelivery: {
    title: 'Оплата и доставка',
    label: 'Оплата и доставка',
    path: '/payment-and-delivery',
  },
  contacts: {
    title: 'Контакты',
    label: 'Контакты',
    path: '/contacts',
  },
  favourites: {
    title: 'Избранное',
    label: 'Избранное',
    path: '/favourites',
  },
  basket: {
    title: 'Корзина',
    label: 'Корзина',
    path: '/basket',
  },
  order: {
    title: 'Оформление заказа',
    label: 'Оформление заказа',
    path: '/order',
  },
  news: {
    title: 'Новости',
    label: 'Новости',
    path: '/news',
  },
  about: {
    title: 'Кто мы',
    label: 'Кто мы',
    path: '/about',
  },
  ourTeam: {
    title: 'Наша команда',
    label: 'Наша команда',
    path: '/our-team',
  },
  reviews: {
    title: 'Отзывы',
    label: 'Отзывы',
    path: '/reviews',
  },
  settings: {
    title: 'Настройки приложения',
    label: 'Настройки приложения',
    path: '/settings',
  },
};
