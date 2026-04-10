import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const authClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function loginUser(payload) {
  const response = await authClient.post("/auth/login", payload);
  return response.data;
}

export async function requestPasswordReset(payload) {
  const response = await authClient.post("/auth/forgot-password", payload);
  return response.data;
}

export async function resendPasswordReset(payload) {
  const response = await authClient.post("/auth/forgot-password/resend", payload);
  return response.data;
}
