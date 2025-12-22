'use client';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMutation } from '@tanstack/react-query';
import { createTodo } from '@/services/todos';
import { useRouter } from 'next/navigation';
import { useCounter } from '@/store/counter';
//1
import { useTodoDraft } from '@/store/todoDraft';
const CreateTodoForm = () => {
  const router = useRouter();
  //2
  const { draft, cleanDraft, saveDraft } = useTodoDraft();
  //mutate - функція, яку будемо викликати при сабміті. isPending - для дизейблу кнопки після сабміту
  const { mutate, isPending } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      //3
      cleanDraft();
      router.push('/todos');
    },
  });
  //send to server
  const handleSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;
    // const values = Object.fromEntries(formData) as TodoPayload;
    mutate({ title });
  };
  const { value, increment, decrement } = useCounter();
  //4
  const handlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    saveDraft({ ...draft, [name]: value });
  };
  //   console.log({ draft });

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
        }}
      >
        <Button onClick={() => decrement(10)} disabled={isPending} variant="primary">
          -
        </Button>
        <span>{value}</span>
        <Button onClick={() => increment(1)} disabled={isPending} variant="primary">
          +
        </Button>
      </div>

      <Form action={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={draft.title}
            onChange={handlChange}
            name="title"
            type="text"
            placeholder="Enter title"
          />
        </Form.Group>

        <Button disabled={isPending} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateTodoForm;
