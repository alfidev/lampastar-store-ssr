import React from 'react';
import styled from 'styled-components';

import { useToasts } from '../../hooks';
import { Toast } from './Toast';

const FixedWrapper = styled.div`
  position: fixed;
  top: 150px;
  right: 0;
  left: 100%;
  z-index: 15;
`;

export const Toasts = () => {
  const { toasts, removeToast } = useToasts();

  return (
    <FixedWrapper>
      {toasts?.map(({ id, message, status, time, closeable }) => (
        <Toast
          key={id}
          message={message}
          status={status}
          time={time}
          closeable={closeable}
          close={() => removeToast(id)}
        />
      ))}
    </FixedWrapper>
  );
};
