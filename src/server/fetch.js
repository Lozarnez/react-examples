import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const fetchApi = async (endpoint, { method = 'GET', data, params } = {}) => {
  try {
    const config = {
      method,
      url: `${baseURL}${endpoint}`,
      data,
      params,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};