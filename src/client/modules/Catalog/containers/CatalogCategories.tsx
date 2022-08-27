import React from 'react'
import { useCatalog } from '../hooks/useCatalog'
import { PageTitle } from '@layouts/Lampastar'

export const CatalogCategories = () => {
  const { isLoading, list } = useCatalog()

  if (isLoading) return null

  return (
    <>
      <PageTitle>Каталог</PageTitle>
      {list.map(({ name }) => name)}
    </>
  )
}
