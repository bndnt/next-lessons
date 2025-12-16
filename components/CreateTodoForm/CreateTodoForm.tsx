'use client';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';
const CreateTodoForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control name="title" type="email" placeholder="Enter title" />
        {/* <Form.Text className="text-muted">We`ll never share your email with anyone else.</Form.Text> */}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CreateTodoForm;
