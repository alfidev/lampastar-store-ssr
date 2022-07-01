import styled from "styled-components";
import { Input } from "../Input";
import { Button } from "../Button";

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
`;

export const SearchButton = styled(Button)`
  position: absolute;
  top: ${({ theme }) => theme.indents.xxs};
  right: ${({ theme }) => theme.indents.xxs};
  bottom: ${({ theme }) => theme.indents.xxs};
  border-radius: ${({ theme }) => theme.radius.xxs};
  width: 32px;
  height: 32px;
  padding: 0;
`;

export const StyledSearchInput = styled(Input)`
  height: 40px;
  padding-right: 50px;
  padding-left: ${({ theme }) => theme.indents.l};
`;
