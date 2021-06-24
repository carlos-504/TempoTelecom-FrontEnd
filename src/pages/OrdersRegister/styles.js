import styled from 'styled-components';
import {
  white,
  secondaryColor,
  backgroundColor,
  success,
  successHover,
} from '../../GlobalStyle';

export const Container = styled.div`
  min-height: calc(100vh - 58px);
  display: flex;
  justify-content: center;
`;

export const ContentPage = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Typography = styled.div`
  background: ${secondaryColor};
  color: ${white};
  font-weight: 700;
  text-align: center;
  font-size: 1.35rem;
  padding: 20px 15px;
  border-radius: 5px;
  width: 38%;
  align-self: flex-start;
  position: relative;
  bottom: -10px;
  z-index: -1;
`;

export const FormBox = styled.div`
  background: ${backgroundColor};
  padding: 30px;
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 100%;

  & form {
    display: flex;
    flex-direction: column;

    & .MuiFormControl-root {
      margin: 10px 0;
    }
  }
`;

export const ConfirmBtn = styled.button`
  background: ${success};
  color: white;
  font-weight: bold;
  padding: 10px 0;
  border: none;
  border-radius: 5px;
  width: 18%;
  align-self: flex-end;
  cursor: pointer;

  &:hover {
    background: ${successHover};
  }
`;
