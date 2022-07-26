import {About, Catalog, Contacts} from "@pages";

export const ROUTES: Record<string, any> = {
  home: {
    title: "Главная страница",
    label: "Главная",
    path: "/",
    component: Catalog,
  },
  catalog: {
    title: "Каталог товаров",
    label: "Каталог",
    path: "/catalog",
    component: Catalog,
  },
  profile: {
    title: "Страница профиля",
    label: "Профиль",
    path: "/profile",
    component: Catalog,
  },
  paymentAndDelivery: {
    title: "Оплата и доставка",
    label: "Оплата и доставка",
    path: "/payment-and-delivery",
    component: Catalog,
  },
  contacts: {
    title: "Контакты",
    label: "Контакты",
    path: "/contacts",
    component: Contacts,
  },
  favourites: {
    title: "Избранное",
    label: "Избранное",
    path: "/favourites",
    component: Catalog,
  },
  basket: {
    title: "Корзина",
    label: "Корзина",
    path: "/basket",
    component: Catalog,
  },
  news: {
    title: "Новости",
    label: "Новости",
    path: "/news",
    component: Catalog,
  },
  sales: {
    title: "Распродажа",
    label: "Распродажа",
    path: "/sales",
    component: Catalog,
  },
  about: {
    title: "Кто мы",
    label: "Кто мы",
    path: "/about",
    component: About,
  },
  reviews: {
    title: "Отзывы",
    label: "Отзывы",
    path: "/reviews",
    component: Catalog,
  },
};
