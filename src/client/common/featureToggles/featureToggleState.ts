import { BACKEND_ENABLE, USE_CATALOG } from './featureToggleNames';

export const featureToggleState = {
  [BACKEND_ENABLE]: {
    enabled: false,
    description: 'Включает работу с бэком',
  },
  [USE_CATALOG]: {
    enabled: true,
    description: 'Включает каталог',
  },
};
