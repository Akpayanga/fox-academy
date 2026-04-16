import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api/v1";

const assignmentClient = axios.create({
  baseURL: API_BASE_URL,
});

function getAuthHeaders(isMultipart = false) {
  const token = localStorage.getItem("authToken");

  return {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(isMultipart ? {} : { "Content-Type": "application/json" }),
  };
}

export async function submitAssignment(assignmentId, formData) {
  const response = await assignmentClient.post(
    `/assignments/${assignmentId}/submit`,
    formData,
    {
      headers: getAuthHeaders(true),
    }
  );

  return response.data;
}