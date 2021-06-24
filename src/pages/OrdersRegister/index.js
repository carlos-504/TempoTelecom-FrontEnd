import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { getUsers } from '../../services/usersServices';
import { getProducts } from '../../services/productsService';
import {
  Container,
  ContentPage,
  Typography,
  FormBox,
  ConfirmBtn,
} from './styles';

function OrdersRegister() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  useEffect(() => {
    getUsers().then((resp) => setUsers(resp));
    getProducts().then((resp) => setProducts(resp));
  }, []);

  const onSubmit = async (data) => {
    try {
      const { UserId, product1, product2, product3 } = data;

      const arrayProducts = [product1, product2, product3];

      const productsSelected = arrayProducts.filter((element) => {
        return element;
      });

      const order = { UserId, products: productsSelected };

      await api.post('/order/store', order);
      history.push('/listar-pedidos');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <ContentPage>
          <Typography>
            <h2>Cadastrar Pedido</h2>
          </Typography>
          <FormBox>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                variant="standard"
                inputRef={register}
                name="UserId"
                SelectProps={{
                  native: true,
                }}
                select
                fullWidth
              >
                <option value="">Cliente</option>
                <option value="">Nenhum</option>
                {users.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </TextField>
              <TextField
                variant="standard"
                inputRef={register}
                name="product1"
                SelectProps={{
                  native: true,
                }}
                select
                fullWidth
              >
                <option value="">Produto</option>
                <option value="">Nenhum</option>
                {products.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </TextField>
              <TextField
                variant="standard"
                inputRef={register}
                name="product2"
                SelectProps={{
                  native: true,
                }}
                select
                fullWidth
              >
                <option value="">Produto</option>
                <option value="">Nenhum</option>
                {products.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </TextField>
              <TextField
                variant="standard"
                inputRef={register}
                name="product3"
                SelectProps={{
                  native: true,
                }}
                select
                fullWidth
              >
                <option value="">Produto</option>
                <option value="">Nenhum</option>
                {products.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </TextField>
              <ConfirmBtn>Salvar</ConfirmBtn>
            </form>
          </FormBox>
        </ContentPage>
      </Container>
    </>
  );
}

export default OrdersRegister;
