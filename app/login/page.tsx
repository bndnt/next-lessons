// import LoginForm from './Login.client';
'use client';
// 4-додаємо клієнтську частину
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
// 5-Імпортуємо функцію запиту з сервісів
import { login } from '@/services/auth';
import { useMutation } from '@tanstack/react-query';
function Login() {
  //6
  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: data => {
      console.log(data);
    },
    onError: error => {
      console.error(error);
    },
  });

  // 3-Описуємо функцію
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
      {/* 1-Створюємо форму та інпути */}
      {/* 2-Підтягуємо на форму action та функцію */}
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
        {/*7-added disabled*/}

        <Button variant="primary" type="submit" disabled={isPending}>
          Sign in
        </Button>
      </Form>
    </div>
  );
}

export default Login;
