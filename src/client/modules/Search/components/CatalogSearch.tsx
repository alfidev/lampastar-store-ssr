import React, { useState } from 'react';
import { SearchInput } from '@ui/components';
import { useNavigate } from 'react-router-dom';

export const CatalogSearch = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  const onSubmitHandler = () => {
    navigate(`/catalog?search=${search}`);
    setSearch('');
  };

  return <SearchInput value={search} onChange={setSearch} onSubmit={onSubmitHandler} />;
};
