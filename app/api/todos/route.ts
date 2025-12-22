//Цей файл створено для переносу запитів з сервісу
// Тепер цей запит робиться на api/todos та буде робитися запит на їх отримання і створення
import API from '../api';
import type { Todo, TodoPayload } from '@/types/todo';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  //1- Замість await get -> await API
  //2 - Замість повного посилання - ('/todos'), бо в АПІ вже вказали базове посилання
  const { data } = await API.get<Todo[]>('/todos');
  console.log('HERE');

  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as TodoPayload;
  const { data } = await API.post<Todo>('/todos', payload);
  return NextResponse.json(data);
}
