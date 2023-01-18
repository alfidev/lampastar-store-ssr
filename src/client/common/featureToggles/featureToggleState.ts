import { BACKEND_ENABLE, USE_BUY_TOP, USE_ORDER } from './featureToggleNames';

export const featureToggleState = {
  [USE_ORDER]: {
    enabled: false,
    description: 'Включает работу с заказами',
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
