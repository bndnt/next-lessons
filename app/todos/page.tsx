import Link from 'next/link';

import { getTodos } from '@/services/todos';

async function Todos() {
  const todos = await getTodos();
  //   console.log(todos);

  return (
    <div>
      <h1>ToDos</h1>
      <ul style={{ paddingInline: '43px', listStyle: 'disc' }}>
        {todos.map(todo => (
          <li key={todo.id}>
            <p>
              <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
