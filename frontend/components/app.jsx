import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import ExchangePricesPerCoinPairContainer from './exchange_prices_per_coin_pair_container';

const App = () => (
  <div>
    <ExchangePricesPerCoinPairContainer />
  </div>
);

export default App;
