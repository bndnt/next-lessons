import type { Todo, TodoPayload } from '@/types/todo';
import axios from 'axios';
export async function getTodos() {
  const { data } = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  return data;

  //  return data.map(todo=>todo.id);
}
export async function getTodo(todoId: Todo['id']) {
  const { data } = await axios.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  return data;
}
export async function createTodo(payload: TodoPayload) {
  const { data } = await axios.post<Todo>('https://jsonplaceholder.typicode.com/todos', payload);
  return data;
}
