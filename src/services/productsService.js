import api from '../services/api';

export const getProducts = async () => {
  try {
    const response = await api.get('/product/list');

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
