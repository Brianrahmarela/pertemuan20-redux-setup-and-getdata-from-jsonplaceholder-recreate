import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//1. import Provider
import { Provider } from 'react-redux';
//6. import file Store dari folder redux yg dibuat
import storeReducers from './redux/store';

ReactDOM.render(
  //2. ganti strict mode dgn tag provider
  //3. buat folder bernama redux 
  //7. masukan store yg di import sbg props variable dgn varnya storeReducers
  <Provider store={storeReducers}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
