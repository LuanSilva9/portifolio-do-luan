import React from 'react';
import ReactDOM from 'react-dom/client';

import Router from './router';

import './estilizacao/app.css'
import './estilizacao/fonte.css'

import { BrowserRouter } from 'react-router-dom';

import Cabecalho from './blocosFixos/Cabecalho/Cabecalho';
import Rodape from './blocosFixos/Rodape/Rodape';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Cabecalho/>
        <Router/>
      <Rodape/>
    </BrowserRouter>    
  </React.StrictMode>
);
