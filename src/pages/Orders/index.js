import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from '@material-ui/core';

import { getOrders } from '../../services/ordersServices';
import Header from '../../componentes/Header';
import { dateFormat } from '../../utils/dateFormat';
import {
  Container,
  ContentPage,
  Typography,
  TableWrap,
  TbHead,
  TbCellHead,
  ViewIcon,
  InsertBtn,
} from './styles';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then((resp) => setOrders(resp));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ContentPage>
          <Typography>Lista de Pedidos</Typography>
          <TableWrap component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TbHead>
                <TableRow>
                  <TbCellHead>#</TbCellHead>
                  <TbCellHead align="center">Data</TbCellHead>
                  <TbCellHead align="center">Cliente</TbCellHead>
                  <TbCellHead align="center">Total Pedido</TbCellHead>
                  <TbCellHead align="right"></TbCellHead>
                </TableRow>
              </TbHead>
              <TableBody>
                {orders.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="center">
                      {dateFormat(order.createdAt)}
                    </TableCell>
                    <TableCell align="center">{order.User.name}</TableCell>
                    <TableCell align="center">R$ {order.totalValue}</TableCell>
                    <TableCell align="center">
                      <ViewIcon titleAccess="Visualizar Pedido" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableWrap>
          <InsertBtn>Cadastrar</InsertBtn>
        </ContentPage>
      </Container>
    </>
  );
}

export default Orders;
