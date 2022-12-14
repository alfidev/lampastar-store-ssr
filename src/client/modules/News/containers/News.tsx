import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NewsList, PaginationPanel } from '../components';
import { useNews } from '../hooks';
import { PageTitle } from '@layouts/Lampastar';
import { useNewsItem } from '@modules/News/hooks/useNewsItem';
import { NewsDetail } from '@modules/News/components/NewsDetail';

export const News = () => {
  const navigate = useNavigate();
  const { '*': newsId } = useParams();

  const [page, setPage] = useState(1);

  const { list, isLoading: isLoadingList, totalPage } = useNews({ page, enabled: !newsId });
  const { data, isLoading: isLoadingItem } = useNewsItem({ id: newsId });

  if (isLoadingList || isLoadingItem || (newsId && !data)) return null;

  const handleClick = (id: number) => {
    navigate(`/news/${id}`);
  };

  if (newsId && data) return <NewsDetail item={data} />;

  return (
    <>
      <PageTitle>Новости</PageTitle>
      <NewsList list={list} onClick={handleClick} />
      <PaginationPanel total={totalPage} page={page} setPage={setPage} />
    </>
  );
};
