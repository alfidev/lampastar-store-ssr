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
