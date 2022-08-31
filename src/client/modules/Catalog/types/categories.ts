export type CategoryTypeResponse = {
  category_id: string;
  column: string;
  date_added: string;
  date_modified: string;
  description: string;
  image: string;
  language_id: string;
  meta_description: string;
  meta_keyword: string;
  meta_title: string;
  name: string;
  parent_id: string;
  sort_order: string;
  status: string;
  store_id: string;
  top: string;
};

export type CategoryType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  image: string;
  metaDescription: string;
  metaKeyword: string;
  metaTitle: string;
  name: string;
  parentId: string;
  sortOrder: string;
  status: string;
};

export type CategoryMap = {
  id: string;
  name: string;
  list: CategoryMap[];
};
