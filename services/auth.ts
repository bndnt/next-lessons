import axios from 'axios';
import type { RegisterPayload, LoginPayload } from '@/types/auth';
// import { headers } from 'next/headers';

export async function login(payload: LoginPayload) {
  const { data } = await axios.post('api/auth/login', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
}
export async function register(payload: RegisterPayload) {
  const { data } = await axios.post('/api/auth/register', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data;
}
