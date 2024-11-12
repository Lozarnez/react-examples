import { fetchApi } from "../fetch";

const BASE_ENDPOINT = '/products'

export const getProducts = async (options = {}) => {
  const { limit = 10, skip = 0, select = '' } = options;
  try {
    const response = await fetchApi(
      BASE_ENDPOINT,
      {
        params: { limit, skip, select }
      }
    );
    return response.products || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getProductById = async (id) => {
  if (!id) {
    console.warn('Product ID is required');
    return null;
  }
  try {
    const response = await fetchApi(`${BASE_ENDPOINT}/${id}`);
    return response || null;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
};

export const createProduct = async (product) => {
  if (!product) {
    console.warn('Product data is required');
    return null
  }
  try {
    const response = await fetchApi(`${BASE_ENDPOINT}/add`, { method: 'POST', data: product });
    return response
  } catch (error) {
    console.log('Error creating product', error);
    return null
  }
}

