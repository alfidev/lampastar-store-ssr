import styled from "styled-components";

export const Input = styled.input`
  flex-grow: 1;
  border-radius: ${({ theme }) => theme.radius.xs};
  border: 1px solid ${({ theme }) => theme.color.border.input};
  outline: none;
  padding: 0 ${({ theme }) => theme.indents.xs};
  height: 40px;
  width: 100%;

  :focus {
    outline: none;
  }
`;
