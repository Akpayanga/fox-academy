const DEFAULT_PRODUCTION_API_BASE_URL = "https://fox-academy-8g7o.onrender.com/api/v1";

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.PROD ? DEFAULT_PRODUCTION_API_BASE_URL : "/api/v1");
