import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../componentes/Header';
import StoreImg from '../../assets/images/store.png';
import {
  Container,
  Store,
  ContentPage,
  GroupButtons,
  InsertBtn,
  ListBtn,
} from './styles';

function Home() {
  const history = useHistory();

  return (
    <>
      <Header />
      <Container>
        <ContentPage>
          <Store src={StoreImg} alt="img-loja" />
          <GroupButtons>
            <InsertBtn onClick={() => history.push('/cadastrar-pedido')}>
              Cadastrar
            </InsertBtn>
            <ListBtn onClick={() => history.push('/listar-pedidos')}>
              Listar
            </ListBtn>
          </GroupButtons>
        </ContentPage>
      </Container>
    </>
  );
}

export default Home;
