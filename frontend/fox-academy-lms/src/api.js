import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getdata = () => axios.get(`${API_URL}/data`);
export const postdata = (data) => axios.post(`${API_URL}/data`, data);