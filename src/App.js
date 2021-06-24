import React from 'react';
import Routes from './routes';
import Header from './componentes/Header';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
