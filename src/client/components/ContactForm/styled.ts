import styled from "styled-components";
import { Button, CheckBox, Input } from "@ui/components";
import { media } from "styled-bootstrap-grid";

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

  ${media.xs`
    display: block;
  `}
`;

export const StyledCheckBox = styled(CheckBox)`
  max-width: 360px;
  margin-right: ${({ theme }) => theme.indents.xxl};
`;

export const StyledButton = styled(Button)`
  ${({ theme }) => media.xs`
    margin-top: ${theme.indents.s};
    width: 100%;
  `}
`;
