import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api/v1";

const communityClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

function getAuthHeaders() {
  const token = localStorage.getItem("authToken");

  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
}

export async function createDiscussion(payload) {
  const response = await communityClient.post("/community/discussions", payload, {
    headers: getAuthHeaders(),
  });

  return response.data;
}

export async function createDiscussionReply(discussionId, payload) {
  const response = await communityClient.post(
    `/community/discussions/${discussionId}/replies`,
    payload,
    {
      headers: getAuthHeaders(),
    }
  );

  return response.data;
}