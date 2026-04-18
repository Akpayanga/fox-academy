import axios from "axios";
import { API_BASE_URL } from "./apiConfig";

const applicationClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function submitApplication(payload) {
  const response = await applicationClient.post("/applications/submit", payload);
  return response.data;
}

export async function getApplicationStatus(email) {
  const response = await applicationClient.get(`/applications/status/${email}`);
  return response.data;
}

export async function verifyInviteCode(payload) {
  const response = await applicationClient.post("/applications/verify-invite", payload);
  return response.data;
}

export async function resendInviteCode(payload) {
  const response = await applicationClient.post("/applications/resend-invite", payload);
  return response.data;
}
