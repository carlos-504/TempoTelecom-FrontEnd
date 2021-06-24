import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
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
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState({});

  const handleClickOpen = async (id) => {
    try {
      const response = await api.get(`/order/index/${id}`);

      setOrder(response.data);
      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                      <ViewIcon
                        titleAccess="Visualizar Pedido"
                        onClick={() => handleClickOpen(order.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableWrap>
          <InsertBtn onClick={() => history.push('/cadastrar-pedidos')}>
            Cadastrar
          </InsertBtn>
        </ContentPage>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Informações do Pedido
          </DialogTitle>
          <DialogContent>
            <DialogContentText>id: {order.id}</DialogContentText>
            <DialogContentText>Produto(s):</DialogContentText>
            {order.products === undefined
              ? 'Carregando...'
              : order.products.map((element) => (
                  <DialogContentText>
                    + {element.name} - {element.value}
                  </DialogContentText>
                ))}
            <DialogContentText>
              Cliente:
              {order.User === undefined ? 'Carregando...' : order.User.name}
            </DialogContentText>
            <DialogContentText>
              Data: {dateFormat(order.createdAt)}
            </DialogContentText>
            <DialogContentText>Total: {order.totalValue}</DialogContentText>
          </DialogContent>
        </Dialog>
      </Container>
    </>
  );
}

export default Orders;
