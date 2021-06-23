import styled from 'styled-components';
import {
  primaryColor,
  white,
  backgroundColor,
  primaryColorDeep,
  backgroundColorDeep,
} from '../../GlobalStyle';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 58px);
`;

export const Store = styled.img`
  width: 300px;
  height: auto;
`;

export const ContentPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`;

export const GroupButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 45%;
  padding: 10px;
`;

const Button = styled.button`
  padding: 10px 100px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
`;

export const InsertBtn = styled(Button)`
  background: ${primaryColor};
  color: ${white};
  border: solid 1px ${white};

  &:hover {
    background: ${primaryColorDeep};
  }
`;

export const ListBtn = styled(Button)`
  background: ${backgroundColor};
  color: ${primaryColor};
  border: solid 2px ${primaryColor};

  &:hover {
    background: ${backgroundColorDeep};
  }
`;
