import { BACKEND_ENABLE, SHOW_ADMIN } from "./featureToggleNames";

export const featureToggleState = {
  [BACKEND_ENABLE]: {
    enabled: false,
    description: "Включает работу с бэком",
  },
  [SHOW_ADMIN]: {
    enabled: false,
    description:
      "Показывать гуру сего проекта, светило мира интернет магазинов, и просто хорошего человека",
  },
};
