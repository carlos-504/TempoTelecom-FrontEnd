import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Orders from './pages/Orders';
import OrdersRegister from './pages/OrdersRegister';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/listar-pedidos" exact component={Orders} />
        <Route path="/cadastrar-pedidos" exact component={OrdersRegister} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
