'use client';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { login } from '@/services/auth';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { ApiError } from '@/types/api';
import { useAuthStore } from '@/store/auth';

function Login() {
  const setUser = useAuthStore(store => store.setUser);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: data => {
      setUser(data);
      router.push('/profile');
    },
    onError: error => {
      setError((error as ApiError).response?.data?.error ?? (error as ApiError).message);
    },
  });

  const handleSubmit = (formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    {
      /*8 - added mutate from mutations*/
    }
    mutate({ email, password });
  };
  return (
    <div className="container">
      <p className="error">{error}</p>
      <Form action={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We`ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isPending}>
          Sign in
        </Button>
      </Form>
    </div>
  );
}

export default Login;

/* 1-Створюємо форму та інпути */

/* 2-Підтягуємо на форму action та функцію */

// 3-Описуємо функцію
// const handleSubmit = (formData: FormData) => {
//   const email = formData.get('email') as string;
//   const password = formData.get('password') as string;
// };

// 4-додаємо клієнтську частину
//'use client';

// 5-Імпортуємо функцію запиту з сервісів
//import { login } from '@/services/auth';

//6 - Мутації

/*  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: data => {
      console.log(data);
    },
    onError: error => {
      console.error(error);
    },
  });*/

// 7 - added disabled
/*
<Button variant="primary" type="submit" disabled={isPending}>
  Sign in
</Button>
        */

//8 - added mutate from mutations to handleSubmit
//    mutate({ email, password });

//9 -  const router = useRouter();

//10 - State error
//  const [error, setError] = useState<string | null>(null);

//11
/*
onSuccess: () => {
  router.push('/profile');
},
    */

//12
/*
onError: error => {
      setError((error as ApiError).response?.data?.error ?? (error as ApiError).message);
    },
*/
