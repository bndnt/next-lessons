'use client';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMutation } from '@tanstack/react-query';
import { createTodo } from '@/services/todos';
import { useRouter } from 'next/navigation';
import { useCounter } from '@/store/counter';

const CreateTodoForm = () => {
  const router = useRouter();
  //mutate - функція, яку будемо викликати при сабміті. isPending - для дизейблу кнопки після сабміту
  const { mutate, isPending } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      router.push('/todos');
    },
  });
  const handleSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;
    // const values = Object.fromEntries(formData) as TodoPayload;
    mutate({ title });
  };
  const { value, increment, decrement } = useCounter();

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
          <Form.Control name="title" type="text" placeholder="Enter title" />
        </Form.Group>

        <Button disabled={isPending} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateTodoForm;
