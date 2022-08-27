import { BACKEND_ENABLE, SHOW_ADMIN, USE_CATALOG } from './featureToggleNames';

export const featureToggleState = {
  [BACKEND_ENABLE]: {
    enabled: false,
    description: 'Включает работу с бэком',
  },
  [SHOW_ADMIN]: {
    enabled: false,
    description: 'Показывать админа',
  },
  [USE_CATALOG]: {
    enabled: false,
    description: 'Включает каталог',
  },
};
