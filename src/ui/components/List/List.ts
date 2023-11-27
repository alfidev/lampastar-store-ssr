import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const ListItem = styled.li<{ active?: boolean }>`
  ${({ theme }) => theme.typography.body3};
  padding: ${({ theme }) => theme.indents.xs} ${({ theme }) => theme.indents.s};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius.xxs};
  cursor: pointer;
  transition: background ease 0.1s;
  background: ${({ active, theme }) => (active ? theme.color.background.main : 'transparent')};
  margin-bottom: ${({ theme }) => theme.indents.xxxs};

  :hover {
    background: ${({ theme }) => theme.color.background.tertiary};
  }
`;
