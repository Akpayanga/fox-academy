import axios from 'axios';
import { API_BASE_URL } from './services/apiConfig';

export const getdata = () => axios.get(`${API_BASE_URL}/data`);
export const postdata = (data) => axios.post(`${API_BASE_URL}/data`, data);