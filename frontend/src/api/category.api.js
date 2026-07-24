import API from './axios';

export const fetchCategories = () => API.get('/categories');
export const createCategory = (data) => API.post('/categories', data);
