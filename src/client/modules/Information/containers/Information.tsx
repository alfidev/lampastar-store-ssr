import React from 'react';
import { InformationType } from '../types';
import { Info } from '@ui/components';

type Props = {
  type: InformationType;
};

const MESSAGES = {
  top: [
    {
      id: 'enablingCatalog',
      message:
        'Каталог работает в ознакомительном режиме, Вы можете ознакомиться с ассортиментом и ценами. ' +
        'Заказ через сайт в данный момент недоступен, обратитесь в офис или по телефону к менеджеру.',
    },
  ],
};

export const Information = ({ type }: Props) => {
  return <Info>{MESSAGES[type][0].message}</Info>;
};
