import { Department } from "./types";

export const locale = {
  departments: {
    HEAD: "Руководители",
    SALE: "Отдел продаж",
    TENDER: "Отдел тендеров",
    FINANCE: "Бухгалтерия",
    DELIVERY: "Водители-экспедиторы",
    STOCK: "Склад",
    HR: "HR-менеджеры",
    IT: "Информационные технологии",
  } as Record<Department, string>,
  title: "Наша команда",
};
