import { Omit } from '@reduxjs/toolkit/dist/tsHelpers';

import { MESSAGE_FIELDS } from '../constants';

export type MessageFormValuesType = {
  [MESSAGE_FIELDS.EMAIL]: string;
  [MESSAGE_FIELDS.NAME]: string;
  [MESSAGE_FIELDS.MESSAGE]: string;
  [MESSAGE_FIELDS.AGREE]: boolean;
};

export type MessageResponseType = {
  success: string;
};

export type MessageRequestType = Omit<MessageFormValuesType, MESSAGE_FIELDS.AGREE>;
