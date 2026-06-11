import { apiClient } from './api';

export const roomService = {
  getAll: () => apiClient.get('/api/rooms'),
  getById: (id) => apiClient.get(`/api/rooms/${id}`),
  create: (data) => apiClient.post('/api/admin/rooms', data),
  update: (id, data) => apiClient.put(`/api/admin/rooms/${id}`, data),
  delete: (id) => apiClient.delete(`/api/admin/rooms/${id}`),
};
