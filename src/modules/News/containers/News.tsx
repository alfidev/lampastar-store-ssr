'use client';

import { useRouter, useParams } from 'next/navigation';
import React, { useState } from 'react';

import { PageTitle } from '../../../layouts/Lampastar';
import { NewsList, PaginationPanel } from '../components';
import { NewsDetail } from '../components/NewsDetail';
import { useNews, useNewsItem } from '../hooks';

export const News = () => {
  const router = useRouter();
  const { '*': newsId } = useParams();

  const [page, setPage] = useState(1);

  const { list, isLoading: isLoadingList, totalPage } = useNews({ page, enabled: !newsId });
  const { data, isLoading: isLoadingItem } = useNewsItem({ id: newsId as string });

  if (isLoadingList || isLoadingItem || (newsId && !data)) return null;

  const handleClick = (id: number) => {
    router.push(`/news/${id}`);
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
