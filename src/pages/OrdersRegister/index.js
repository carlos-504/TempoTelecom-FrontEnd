import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
} from '@material-ui/core';

import {
  Container,
  ContentPage,
  Typography,
  FormBox,
  ConfirmBtn,
} from './styles';

function OrdersRegister() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Container>
        <ContentPage>
          <Typography>
            <h2>Cadastrar Pedido</h2>
          </Typography>
          <FormBox>
            <form>
              <FormControl>
                <InputLabel id="demo-simple-select-helper-label">
                  Cliente
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {/* <FormHelperText>Some important helper text</FormHelperText> */}
              </FormControl>
              <FormControl>
                <InputLabel id="demo-simple-select-helper-label">
                  Produto
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {/* <FormHelperText>Some important helper text</FormHelperText> */}
              </FormControl>
              <FormControl>
                <InputLabel id="demo-simple-select-helper-label">
                  Produto
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {/* <FormHelperText>Some important helper text</FormHelperText> */}
              </FormControl>
              <ConfirmBtn>Salvar</ConfirmBtn>
            </form>
          </FormBox>
        </ContentPage>
      </Container>
    </>
  );
}

export default OrdersRegister;
