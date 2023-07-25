import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { Form } from 'components/RegisterForm/RegisterForm.styled';
import { Container } from 'components/App/App.styled';
import { TextField, Button } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
        {/* <Label>
          Email
          <input type="email" name="email" />
        </Label> */}
        {/* <Label>
          Password
          <input type="password" name="password" />
        </Label> */}
        <Button variant="contained" type="submit">
          Log In
        </Button>
      </Form>
    </Container>
  );
};
