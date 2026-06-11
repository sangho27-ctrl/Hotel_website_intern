// API base URL — reads from Vite env variable, falls back to empty string for relative paths in dev
const API_BASE = import.meta.env.VITE_API_URL || '';

export default API_BASE;
