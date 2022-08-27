import styled from 'styled-components';
import { Button, CheckBox, Input } from '@ui/components';
import { adaptive } from '@ui/components/Adaptive';

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
export const Row = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.indents.m};
`;

export const StyledNameInput = styled(Input)`
  margin-right: ${({ theme }) => theme.indents.m};
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.indents.xxl};

  ${adaptive.maxWidth.mobile} {
    display: block;
  }
`;

export const StyledCheckBox = styled(CheckBox)`
  max-width: 360px;
  margin-right: ${({ theme }) => theme.indents.xxl};
`;

export const StyledButton = styled(Button)`
  ${adaptive.maxWidth.mobile} {
    margin-top: ${({ theme }) => theme.indents.s};
    width: 100%;
  }
`;
