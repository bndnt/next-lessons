import { getTodos } from '@/services/todos';

async function Todos() {
  const todos = await getTodos();
  console.log(todos);

  return (
    <div>
      <h1>ToDos</h1>
      <ul style={{ paddingInline: '43px', listStyle: 'disc' }}>
        {todos.map(todo => (
          <li key={todo.id}>
            <p>{todo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
