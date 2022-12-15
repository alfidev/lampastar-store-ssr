import { CategoryMap, CategoryTypeResponse, CategoryType } from '../types';

export const mapCategories = (categories: CategoryTypeResponse[]): CategoryType[] =>
  categories.map(
    ({
      category_id,
      date_added,
      date_modified,
      parent_id,
      sort_order,
      meta_description,
      meta_keyword,
      meta_title,
      ...props
    }) => ({
      id: category_id,
      createdAt: date_added,
      updatedAt: date_modified,
      parentId: parent_id,
      sortOrder: sort_order,
      metaDescription: meta_description,
      metaKeyword: meta_keyword,
      metaTitle: meta_title,
      ...props,
    }),
  );

export const getCategoriesRecursive = (
  list: CategoryType[],
  currentParentId = '0',
  maxDepth = 2,
  depth = 0,
): CategoryMap[] =>
  list
    .filter(({ parentId }) => parentId === currentParentId)
    .map(({ id, name }) => ({
      id: id,
      name: name,
      list: maxDepth === -1 || depth <= maxDepth ? getCategoriesRecursive(list, id, maxDepth, depth + 1) : [],
    }));
