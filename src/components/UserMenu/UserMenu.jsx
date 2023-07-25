import { useDispatch, useSelector } from 'react-redux';
import { selectUsername } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import { WrapperMenu, BtnLogOut } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);

  return (
    <WrapperMenu>
      <p>Welcome, {name}!</p>
      <BtnLogOut type="button" onClick={() => dispatch(logOut())}>
        Logout
      </BtnLogOut>
    </WrapperMenu>
  );
};
