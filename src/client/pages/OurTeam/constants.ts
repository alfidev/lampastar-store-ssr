import Member1 from '@resources/images/team/team_member_1.jpg';
import Member2 from '@resources/images/team/team_member_2.jpg';
import Member3 from '@resources/images/team/team_member_3.jpg';
import Member4 from '@resources/images/team/team_member_4.jpg';
import Member5 from '@resources/images/team/team_member_5.jpg';
import Member6 from '@resources/images/team/team_member_6.jpg';
import Member10 from '@resources/images/team/team_member_10.jpg';
import Member11 from '@resources/images/team/team_member_11.jpg';
import Member12 from '@resources/images/team/team_member_12.jpg';
import MemberMain from '@resources/images/team/team_member_main.jpg';
import MemberSubMain from '@resources/images/team/team_member_sub_main.jpg';
import Member17 from '@resources/images/team/team_member_17.jpg';
import { MemberType, TeamType } from './types';

const HEAD: MemberType[] = [
  {
    id: 14,
    image: MemberMain,
    name: 'Евгений Щербаха',
    description: 'Директор',
  },
  {
    id: 15,
    image: MemberSubMain,
    name: 'Татьяна Кобылинская',
    description: 'Директор по развитию',
  },
];

const SALE: MemberType[] = [
  {
    id: 10,
    image: Member10,
    name: 'Виктория Московец',
    description: 'Менеджер по продажам',
  },
  {
    id: 12,
    image: Member12,
    name: 'Ольга Захарченко',
    description: 'Менеджер по продажам',
  },
  {
    id: 11,
    image: Member11,
    name: 'Ирина Мамедова',
    description: 'Менеджер по продажам',
  },
];

const TENDER: MemberType[] = [];

const FINANCE: MemberType[] = [
  {
    id: 6,
    image: Member6,
    name: 'Наталья Бульда',
    description: 'Бухгалтер по учёту труда и заработной платы',
  },
];

const DELIVERY: MemberType[] = [
  {
    id: 1,
    image: Member1,
    name: 'Никита Старцев',
    description: 'Водитель-экспедитор',
  },
  {
    id: 2,
    image: Member2,
    name: 'Филипп Карась',
    description: 'Водитель-экспедитор',
  },
];

const STOCK: MemberType[] = [
  {
    id: 3,
    image: Member3,
    name: 'Алексей Летов',
    description: 'Кладовщик',
  },
  {
    id: 4,
    image: Member4,
    name: 'Владимир Гриценко',
    description: 'Кладовщик',
  },
  {
    id: 5,
    image: Member5,
    name: 'Алексей Кулинич',
    description: 'Специалист по хозяйственной части',
  },
];

const HR: MemberType[] = [
  {
    id: 16,
    image: Member17,
    name: 'Елизавета Барышникова',
    description: 'HR-менеджер',
  },
];

const IT: MemberType[] = [
  {
    id: 17,
    name: 'Алексей Фирсаев',
    description: 'Руководитель IT департамента без сотрудников',
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
