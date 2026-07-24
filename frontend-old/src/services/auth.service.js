import * as authApi from '../api/auth.api';

export const authService = {
  login: (credentials) => authApi.loginApi(credentials),
  register: (userData) => authApi.registerApi(userData),
};
