const axios = require('axios');
const config = require('config');

const url_api_vk = config.get('Server.URL.VK');

const $api = axios.create({
  withCredentials: true,
  baseURL: url_api_vk
});

$api.interceptors.request.use((config) => {
  config.headers.token = `${config.token}`;
  return config;
})

module.exports = $api;