import api from '../services/api';

export const getUsers = async () => {
  try {
    const response = await api.get('/user/list');

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
