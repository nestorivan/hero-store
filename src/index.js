import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ProductsProvider } from './context/ProductsContext';
import { StoreProvider } from './context/StoreContext';

ReactDOM.render(
  <ProductsProvider>
    <StoreProvider>
      <App />
    </StoreProvider>
  </ProductsProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
