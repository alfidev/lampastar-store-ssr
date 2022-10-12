import React from 'react';
import { SearchButton, SearchWrapper, StyledSearchInput } from './styled';
import { SearchIcon } from '@ui/icons';

export const SearchInput = () => {
  return (
    <SearchWrapper>
      <SearchButton>
        <SearchIcon size="xl" />
      </SearchButton>
      <StyledSearchInput type="text" placeholder={'Искать товары'} autoComplete="off" />
    </SearchWrapper>
  );
};
