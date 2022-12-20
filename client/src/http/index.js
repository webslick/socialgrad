import axios from 'axios';

// export const API_URL = 'https://socialgrad.ru/api';
export const API_URL = 'http://localhost:4000/api'; 

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
}); 

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token_pfds')}`;
  return config;
})
 
$api.interceptors.response.use((config) => {
  return config;
}, async (error)=> {
  const originRequest = error.config
  if(error.response.status === 401 && error.config && !error.config._isRetry) {
    originRequest._isRetry = true;
    try { 
      const response = await axios.get(`${API_URL}/refresh`, { withCredentials:true }) 
      localStorage.setItem('token_pfds',response.data.accessToken);
      return $api.request(originRequest)
    } catch (e) {

    }
  }
   throw error;
})

const api =  { 
  main_api: $api  
}; 

export default api;
