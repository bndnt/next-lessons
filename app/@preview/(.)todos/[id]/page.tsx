import { getTodo } from '@/services/todos';

interface PreviewNoteProps {
  params: Promise<{ id: string }>;
}
async function PreviewNote({ params }: PreviewNoteProps) {
  const { id } = await params;
  const todo = await getTodo(Number.parseInt(id, 10));
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>Cpmpleted: {todo.completed ? 'Yes' : 'No'}</p>
    </div>
  );
}
export default PreviewNote;
