import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';
import { GlobalStyle } from "./Styles/GlobalStyles";


axios.defaults.baseURL = 'https://mock-api.driven.com.br/api/v4/driven-plus';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
