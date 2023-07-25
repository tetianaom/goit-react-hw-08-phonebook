import styled from '@emotion/styled';

export const WrapperMenu = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;

  > p {
    margin: 0;
    font-weight: 500;
  }
`;

export const BtnLogOut = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 600;
  border-color: transparent;
  background-color: #5c80bc;
  color: #3d3b30;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #5c80bc;
  }
`;
