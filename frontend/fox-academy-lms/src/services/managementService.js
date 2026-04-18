import axios from "axios";
import { API_BASE_URL } from "./apiConfig";

const managementClient = axios.create({
  baseURL: `${API_BASE_URL}/management`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Assuming there's a way to get admin token. The `authService` probably sets it or the browser maintains it in cookies/headers.
// Using interceptors or just ensuring it uses the correct context. (If using cookies, standard axios logic holds. We can add withCredentials if needed).
managementClient.defaults.withCredentials = true;

// Fetch applications
export async function getPendingApplications() {
  const response = await managementClient.get("/applications");
  return response.data;
}

// Approve Application
export async function approveApplication(id) {
  const response = await managementClient.post(`/applications/${id}/approve`);
  return response.data;
}

// Reject Application
export async function rejectApplication(id) {
  const response = await managementClient.delete(`/applications/${id}/reject`);
  return response.data;
}
