import React from 'react';
import Table from '@material-ui/core/Table';
import { TableBody, TableCell, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import Header from '../../componentes/Header';
import {
  Container,
  ContentPage,
  Typography,
  TableWrap,
  TbHead,
  TbCellHead,
  ViewIcon,
} from './styles';

function Orders() {
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
                <TableRow key>
                  <TableCell component="th" scope="row">
                    1
                  </TableCell>
                  <TableCell align="center">23/06/12</TableCell>
                  <TableCell align="center">Carlos Henrique</TableCell>
                  <TableCell align="center">R$ 100,00</TableCell>
                  <TableCell align="center">
                    <ViewIcon titleAccess="Visualizar Pedido" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableWrap>
        </ContentPage>
      </Container>
    </>
  );
}

export default Orders;
