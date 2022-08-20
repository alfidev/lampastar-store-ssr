import Member1 from "@resources/images/team/team_member_1.jpg";
import Member2 from "@resources/images/team/team_member_2.jpg";
import Member3 from "@resources/images/team/team_member_3.jpg";
import Member4 from "@resources/images/team/team_member_4.jpg";
import Member5 from "@resources/images/team/team_member_5.jpg";
import Member6 from "@resources/images/team/team_member_6.jpg";
import Member7 from "@resources/images/team/team_member_7.jpg";
import Member8 from "@resources/images/team/team_member_8.jpg";
import Member9 from "@resources/images/team/team_member_9.jpg";
import Member10 from "@resources/images/team/team_member_10.jpg";
import Member11 from "@resources/images/team/team_member_11.jpg";
import Member12 from "@resources/images/team/team_member_12.jpg";
import Member13 from "@resources/images/team/team_member_13.jpg";
import MemberMain from "@resources/images/team/team_member_main.jpg";
import MemberSubMain from "@resources/images/team/team_member_sub_main.jpg";
import Member17 from "@resources/images/team/team_member_17.jpg";
import { TeamType } from "./types";

const HEAD = [
  {
    id: 14,
    image: MemberMain,
    name: "Евгений Щербаха",
    description: "Директор",
  },
  {
    id: 15,
    image: MemberSubMain,
    name: "Татьяна Кобылинская",
    description: "Директор по развитию",
  },
];

const SALE = [
  {
    id: 8,
    image: Member8,
    name: "Елена Лосева",
    description: "Менеджер по продажам",
  },
  {
    id: 10,
    image: Member10,
    name: "Виктория Московец",
    description: "Менеджер по продажам",
  },
  {
    id: 12,
    image: Member12,
    name: "Ольга Захарченко",
    description: "Менеджер по продажам",
  },
  {
    id: 11,
    image: Member11,
    name: "Ирина Мамедова",
    description: "Менеджер по продажам",
  },
  {
    id: 13,
    image: Member13,
    name: "Валентина Мананникова",
    description: "Специалист по сопровождению продаж",
  },
];

const TENDER = [
  {
    id: 9,
    image: Member9,
    name: "Ольга Котенко",
    description: "Специалист тендерного отдела",
  },
];

const FINANCE = [
  {
    id: 6,
    image: Member6,
    name: "Наталья Бульда",
    description: "Бухгалтер по учёту труда и заработной платы",
  },
  {
    id: 7,
    image: Member7,
    name: "Наталья Когутенко",
    description: "Бухгалтер по учёту основных средств и материалов",
  },
];

const DELIVERY = [
  {
    id: 1,
    image: Member1,
    name: "Никита Старцев",
    description: "Водитель-экспедитор",
  },
  {
    id: 2,
    image: Member2,
    name: "Филипп Карась",
    description: "Водитель-экспедитор",
  },
];

const STOCK = [
  {
    id: 3,
    image: Member3,
    name: "Алексей Летов",
    description: "Кладовщик",
  },
  {
    id: 4,
    image: Member4,
    name: "Владимир Гриценко",
    description: "Кладовщик",
  },
  {
    id: 5,
    image: Member5,
    name: "Алексей Кулинич",
    description: "Специалист по хозяйственной части",
  },
];

const HR = [
  {
    id: 16,
    image: Member17,
    name: "Елизавета Барышникова",
    description: "HR-менеджер",
  },
];

const IT = [
  {
    id: 17,
    name: "Алексей Фирсаев",
    description: "Руководитель IT департамента без сотрудников",
    hidden: true,
  },
];

export const TEAM: TeamType = {
  HEAD,
  SALE,
  TENDER,
  FINANCE,
  DELIVERY,
  STOCK,
  HR,
  IT,
};
