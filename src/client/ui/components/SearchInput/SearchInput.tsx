import React from "react";
import { SearchButton, SearchWrapper, StyledSearchInput } from "./styled";
import { SearchIcon } from "@ui/icons";
import { useTheme } from "styled-components";

export const SearchInput = () => {
  const theme = useTheme();

  return (
    <SearchWrapper>
      <SearchButton>
        <SearchIcon size={theme.sizes.xl} />
      </SearchButton>
      <StyledSearchInput
        type="text"
        placeholder={"Искать товары"}
        autoComplete="off"
      />
    </SearchWrapper>
  );
};
