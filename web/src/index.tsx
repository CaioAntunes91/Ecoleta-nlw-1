import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(//Metodo utilizado para renderizar o componente especificado no primeiro parâmetro dentro do elemento HTML selecionado no segundo parâmtero
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
