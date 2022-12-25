import React, { ReactNode, useEffect } from 'react';
import styled from 'styled-components';

type Props = { children?: ReactNode; onClick: () => void; isTransparent?: boolean };

const StyledBackground = styled.div<{ isTransparent?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ isTransparent }) => (isTransparent ? 'transparent' : 'rgba(0, 0, 0, 0.5)')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContent = styled.div`
  position: relative;
  display: flex;
  max-width: 80%;
  max-height: 80%;
`;

export const ModalBackground = ({ children, onClick, isTransparent }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <StyledBackground onClick={onClick} isTransparent={isTransparent}>
      <InnerContent onClick={(e) => e.stopPropagation()}>{children}</InnerContent>
    </StyledBackground>
  );
};
