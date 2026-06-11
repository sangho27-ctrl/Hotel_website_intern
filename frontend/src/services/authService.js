import { apiClient } from './api';

export const authService = {
  login: (email, password) => apiClient.post('/api/auth/login', { email, password }),
  logout: () => apiClient.post('/api/auth/logout'),
  getMe: () => apiClient.get('/api/auth/me'),
};
