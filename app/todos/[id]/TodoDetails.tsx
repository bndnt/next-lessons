'use client';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getTodo } from '@/services/todos';

import Link from 'next/link';
import { useState } from 'react';

function TodoDetails() {
  const { id } = useParams<{ id: string }>();

  const [isEdit, setIsEdit] = useState<boolean>(false);
  // { data: todo } - деструктуризація обєкта з переіменуванням
  const { data: todo } = useQuery({
    queryKey: ['todo', Number.parseInt(id, 10)],
    queryFn: () => getTodo(Number.parseInt(id, 10)),
    refetchOnMount: false,
    // данные со стороны сервера
  });

  return (
    <div>
      <Link href={`/todos`}>← Back</Link>
      {isEdit ? (
        <form className="projectForm">
          <input type="text" className="projectInput" />
          <button type="submit" className="projectBtn editBtn">
            Submit
          </button>
          <button type="button" onClick={() => setIsEdit(false)} className="projectBtn cancelBtn">
            Cancel
          </button>
        </form>
      ) : (
        <>
          <h1>Todo № {id}</h1>
          <h3>{todo?.title}</h3>
          <p>Status: {todo?.completed ? 'Completed' : 'Not completed'}</p>
          <button onClick={() => setIsEdit(true)} className="projectBtn editBtn">
            Edit
          </button>
        </>
      )}
    </div>
  );
}
export default TodoDetails;
