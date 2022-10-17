import React, { FormEvent } from 'react';
import { SearchButton, SearchWrapper, StyledSearchInput } from './styled';
import { SearchIcon } from '@ui/icons';

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export const SearchInput = ({ value, onChange, onSubmit }: Props) => {
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <SearchWrapper onSubmit={onSubmitHandler}>
      <SearchButton type="submit">
        <SearchIcon size="xl" />
      </SearchButton>
      <StyledSearchInput
        type="text"
        placeholder={'Искать товары'}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onSubmit={onSubmit}
      />
    </SearchWrapper>
  );
};
