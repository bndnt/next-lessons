// import Link from 'next/link';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getTodo } from '@/services/todos';
import TodoDetails from './TodoDetails';
import type { Metadata } from 'next';

// import EditButton from './EditButton';
interface TodoProp {
  params: Promise<{ id: string }>;
  // id - bc the folder name is [id]
  /*string - bc next.js will read the link (http://localhost:3000/todos/1)*/
}
export const generateMetadata = async ({ params }: TodoProp): Promise<Metadata> => {
  const { id } = await params;
  const todo = await getTodo(Number.parseInt(id, 10));
  return {
    title: `Todo #${todo.id}`,
    description: `${todo.title}`,
    openGraph: {
      title: todo.title,
      description: `Description for Todo #${todo.id}`,
    },
  };
};
// PURE SSR
// async function Todo({ params }: TodoProp) {
//   const { id } = await params;
//   // console.log(id, typeof id);

//   const todo = await getTodo(Number.parseInt(id, 10));

//   return (
//     <div>
//       <Link href={`/todos`}>← Back</Link>
//       <h1>Todo - {id}</h1>
//       <h3>{todo.title}</h3>
//       <p>Status: {todo.completed ? 'Completed' : 'Not completed'}</p>
//       <EditButton />
//     </div>
//   );
// }
// export default Todo;

// SSG

import React from 'react';

async function Todo({ params }: TodoProp) {
  const queryCLient = new QueryClient();
  const { id } = await params;
  await queryCLient.prefetchQuery({
    queryKey: ['todo', Number.parseInt(id, 10)],
    queryFn: () => getTodo(Number.parseInt(id, 10)),
  });
  return (
    <HydrationBoundary state={dehydrate(queryCLient)}>
      <TodoDetails />
    </HydrationBoundary>
  );
}

export default Todo;
