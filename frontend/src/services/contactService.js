import { apiClient } from './api';

export const contactService = {
  sendMessage: (data) => apiClient.post('/api/contact', data),
};
