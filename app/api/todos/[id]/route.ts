import { NextRequest, NextResponse } from 'next/server';

// import API from '../../api';
import type { Todo } from '@/types/todo';
import axios from 'axios';
interface TodoProp {
  params: Promise<{ id: string }>;
  // id - bc the folder name is [id]
  /*string - bc next.js will read the link (http://localhost:3000/todos/1)*/
}

export async function GET(request: NextRequest, { params }: TodoProp) {
  const { id } = await params;
  const { data } = await axios.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return NextResponse.json(data);
}
