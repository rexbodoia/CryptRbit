import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import ExchangePricesPerCoinPairContainer from './exchange_prices_per_coin_pair/exchange_prices_per_coin_pair_container';
import DonutChartContainer from './donut_chart/donut_chart_container';

import CoinPairFormContainer from './coin_pair_form/coin_pair_form_container';
import NewsFeedContainer from './news_feed/news_feed_container';

const App = () => (
    <div className='container-fluid'>
      <div className="row">
        <CoinPairFormContainer />
      </div>
      <div className="row">
        <ExchangePricesPerCoinPairContainer />
      </div>
      <div className="row">
        <DonutChartContainer />
      </div>
      <div className="row">
        <NewsFeedContainer />
      </div>
    </div>
);

export default App;
