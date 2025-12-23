import axios, { AxiosError } from 'axios';
export type ApiError = AxiosError<{ error: string }>;

// Створюємо інстанс аксіоса
export const api = axios.create({
  baseURL: 'https://next-v1-notes-api.goit.study',
});
