import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store/store';
import Root from './components/root';
import {
  fetchTopExchangeForDonut,
  fetchTotalVolumeForDonut
} from "./actions/exchange_donut_actions";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch; 
  window.fetchTop = fetchTopExchangeForDonut;
  window.fetchTotal = fetchTotalVolumeForDonut;

  ReactDOM.render(<Root store={store} />, root);
});
