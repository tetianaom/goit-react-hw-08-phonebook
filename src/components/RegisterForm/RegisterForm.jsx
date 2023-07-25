import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { Form } from './RegisterForm.styled';
import { Container } from 'components/App/App.styled';
import { TextField, Button } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Username"
          type="text"
          name="name"
        />
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Email"
          type="email"
          name="email"
        />
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Password"
          type="password"
          name="password"
        />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};
