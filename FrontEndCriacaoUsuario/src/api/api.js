const axios = require('axios');

const api = axios.create({
  baseURL: 'http://192.168.0.24:2000',
});

export async function users() {
  const response = await api.get('/users');
  return console.log(response.data);
}

export default api;
