import axios from 'axios';
// Створюємо інстанс аксіоса
const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
export default API;
