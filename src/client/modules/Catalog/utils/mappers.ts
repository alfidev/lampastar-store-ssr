import {
  CategoryMap,
  CategoryTypeResponse,
  CategoryType,
  ProductTypeResponse,
  ProductType,
} from '@modules/Catalog/types';

export const mapProducts = (products: ProductTypeResponse[]): ProductType[] =>
  products.map(
    ({
      product_id,
      price,
      image,
      meta_title,
      meta_description,
      meta_keyword,
      stock_status,
      manufacturer_id,
      manufacturer,
      tax_class_id,
      date_available,
      weight_class_id,
      length_class_id,
      sort_order,
      date_added,
      date_modified,
      special,
      reward,
      ...props
    }) => ({
      id: product_id,
      image: image || undefined,
      price: Number(price) || 99,
      oldPrice: 106,
      metaTitle: meta_title,
      metaDescription: meta_description,
      metaKeyword: meta_keyword,
      stockStatus: stock_status || undefined,
      manufacturerId: manufacturer_id || undefined,
      taxClassId: tax_class_id,
      dateAvailable: date_available,
      weightClassId: weight_class_id,
      lengthClassId: length_class_id,
      sortOrder: sort_order,
      dateAdded: date_added,
      dateModified: date_modified,
      manufacturer: manufacturer || undefined,
      special: special || undefined,
      reward: reward || undefined,
      ...props,
    }),
  );

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

export const getCategoriesRecursive = (list: CategoryType[], currentParentId = '0', depth = 0): CategoryMap[] =>
  list
    .filter(({ parentId }) => parentId === currentParentId)
    .map(({ id, name }) => ({
      id: id,
      name: name,
      list: depth <= 2 ? getCategoriesRecursive(list, id, depth + 1) : [],
    }));
