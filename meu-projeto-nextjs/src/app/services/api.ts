//services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-sci2-4ycuahis2a-rj.a.run.app', 
  timeout: 10000, 
});

export default api;