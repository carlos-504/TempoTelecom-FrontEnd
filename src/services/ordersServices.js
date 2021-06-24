import api from '../services/api';

export const getOrders = async () => {
  try {
    const response = await api.get('/order/list');

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
