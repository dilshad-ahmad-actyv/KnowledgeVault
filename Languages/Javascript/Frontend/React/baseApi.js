import axios from 'axios';

const API = axios.create({ baseURL: 'https://api.example.com' });

export const fetchProducts = () => API.get('/products');
export const fetchUser = () => API.get('/user');
export const login = (credentials) => API.post('/login', credentials);
