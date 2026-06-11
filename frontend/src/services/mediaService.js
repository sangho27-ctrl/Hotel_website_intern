import { apiClient } from './api';

export const mediaService = {
  getAll: () => apiClient.get('/api/admin/media'),
  upload: (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return apiClient.post('/api/admin/media', formData);
  },
  delete: (id) => apiClient.delete(`/api/admin/media/${id}`),
};
