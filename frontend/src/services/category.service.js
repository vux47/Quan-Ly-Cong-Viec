import * as categoryApi from '../api/category.api';

export const categoryService = {
  getCategories: () => categoryApi.fetchCategories(),
  createCategory: (data) => categoryApi.createCategory(data),
};
