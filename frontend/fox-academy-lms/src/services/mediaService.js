import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api/v1";

const mediaClient = axios.create({
  baseURL: API_BASE_URL,
});

function getAuthHeaders(isMultipart = false) {
  const token = localStorage.getItem("authToken");

  return {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(isMultipart ? {} : { "Content-Type": "application/json" }),
  };
}

export async function uploadSingleMedia(file, extraFields = {}) {
  const formData = new FormData();
  formData.append("file", file);

  Object.entries(extraFields).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  });

  const response = await mediaClient.post("/media/upload", formData, {
    headers: getAuthHeaders(true),
  });

  return response.data;
}

export async function uploadBulkMedia(files, extraFields = {}) {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append("files", file);
  });

  Object.entries(extraFields).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  });

  const response = await mediaClient.post("/media/upload", formData, {
    headers: getAuthHeaders(true),
  });

  return response.data;
}

export async function deleteMediaFile(fileId) {
  const response = await mediaClient.delete(`/media/${fileId}`, {
    headers: getAuthHeaders(),
  });

  return response.data;
}
