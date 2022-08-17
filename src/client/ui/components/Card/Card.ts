import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.color.background.primary};
  padding: ${({ theme }) => theme.indents.m};
  border: 1px solid ${({ theme }) => theme.color.background.main};
  border-radius: ${({ theme }) => theme.radius.xs};
`;
