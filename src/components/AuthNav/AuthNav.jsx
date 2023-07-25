import { WrapperNav } from './AuthNav.styled';
import { Link } from 'components/Layout/Layout.styled';

export const AuthNav = () => {
  return (
    <WrapperNav>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </WrapperNav>
  );
};
