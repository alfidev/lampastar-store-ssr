import { useMutation } from 'react-query';

import { useToasts } from '@common/hooks';
import { ToastStatusEnum } from '@common/types';
import { getQueryRequest } from '@common/utils';

import { API_SEND_MESSAGE_URL } from '../constants';
import { MessageRequestType, MessageResponseType } from '../types';

const messageOptions = {
  method: 'POST',
  url: API_SEND_MESSAGE_URL,
};

export const useContacts = () => {
  const { addToast } = useToasts();
  const { mutateAsync: sendMessage } = useMutation(
    getQueryRequest<MessageResponseType, MessageRequestType>(messageOptions),
  );

  const sendMessageHandler = (values: MessageRequestType) =>
    sendMessage(values)
      .then((data) => {
        addToast({ message: 'Сообщение отправлено', status: ToastStatusEnum.SUCCESS });
        return data;
      })
      .catch(() =>
        addToast({ message: 'Не удалось отправить сообщение, попробуйте позже', status: ToastStatusEnum.ERROR }),
      );

  return { sendMessage: sendMessageHandler };
};
