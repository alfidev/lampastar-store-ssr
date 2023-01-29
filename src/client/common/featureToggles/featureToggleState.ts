import { BACKEND_ENABLE, USE_BUY_TOP, USE_COMPARE, USE_FAVORITES, USE_ORDER } from './featureToggleNames';

export const featureToggleState = {
  [USE_ORDER]: {
    enabled: false,
    description: 'Включает работу с корзиной и заказами',
  },
  [USE_FAVORITES]: {
    enabled: false,
    description: 'Включает работу с избранным',
  },
  [USE_COMPARE]: {
    enabled: false,
    description: 'Включает работу с сравнением',
  },
  [BACKEND_ENABLE]: {
    enabled: false,
    description: 'Включает отображение функций, которые еще не реализованы на бэке',
  },
  [USE_BUY_TOP]: {
    enabled: false,
    description: 'Включает лидеры продаж карусель на главной',
  },
};
