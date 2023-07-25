import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav``;

export const Link = styled(NavLink)`
  border-radius: 4px;
  text-decoration: none;
  padding: 8px 16px;
  color: #3d3b30;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #5c80bc;
  }
`;
