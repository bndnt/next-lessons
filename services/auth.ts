import axios from 'axios';
import type { RegisterPayload, LoginPayload, User, CheckSessionResponse } from '@/types/auth';
// import { headers } from 'next/headers';

export async function login(payload: LoginPayload): Promise<User> {
  const { data } = await axios.post('http://localhost:3000/api/auth/login', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
}
export async function register(payload: RegisterPayload): Promise<User> {
  const { data } = await axios.post<User>('http://localhost:3000/api/auth/register', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data;
}

export async function checkSession(): Promise<boolean> {
  const { data } = await axios.get<CheckSessionResponse>('http://localhost:3000/api/auth/session');
  return data.success;
}

export async function getMe(): Promise<User> {
  const { data } = await axios.get<User>('http://localhost:3000/api/auth/me');
  return data;
}
export async function logout(): Promise<void> {
  await axios.post('http://localhost:3000/api/auth/logout');
}
