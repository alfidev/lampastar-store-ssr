import {
  BACKEND_ENABLE,
  NEW_OUR_TEAM_DESIGN,
  SHOW_ADMIN,
} from "./featureToggleNames";

export const featureToggleState = {
  [BACKEND_ENABLE]: {
    enabled: false,
    description: "Включает работу с бэком",
  },
  [SHOW_ADMIN]: {
    enabled: false,
    description: "Показывать админа",
  },
  [NEW_OUR_TEAM_DESIGN]: {
    enabled: false,
    description: 'Включает новый дизайн страницы "Наша команда"',
  },
};
