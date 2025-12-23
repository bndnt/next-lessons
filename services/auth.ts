import axios from 'axios';
import type { RegisterPayload, LoginPayload } from '@/types/auth';
// import { headers } from 'next/headers';
interface User {
  id: string;
  email: string;
  userName: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}
export async function login(payload: LoginPayload): Promise<User> {
  const { data } = await axios.post('http://localhost:3000/api/auth/login', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
}
export async function register(payload: RegisterPayload): Promise<User> {
  const { data } = (await axios.post)<User>('http://localhost:3000/api/auth/register', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data;
}
