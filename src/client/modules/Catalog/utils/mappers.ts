import { CategoryMap, CategoryTypeResponse, CategoryType } from '@modules/Catalog/types';

export const mapCategories = (categories: CategoryTypeResponse[]): CategoryType[] =>
  categories.map((category) => ({
    id: category.category_id,
    createdAt: category.date_added,
    updatedAt: category.date_modified,
    description: category.description,
    image: category.image,
    metaDescription: category.meta_description,
    metaKeyword: category.meta_keyword,
    metaTitle: category.meta_title,
    name: category.name,
    parentId: category.parent_id,
    sortOrder: category.sort_order,
    status: category.status,
  }));

export const getCategoriesRecursive = (list: CategoryType[], currentParentId = '0', depth = 0): CategoryMap[] =>
  list
    .filter(({ parentId }) => parentId === currentParentId)
    .map(({ id, name }) => ({
      id: id,
      name: name,
      list: depth <= 2 ? getCategoriesRecursive(list, id, depth + 1) : [],
    }));
