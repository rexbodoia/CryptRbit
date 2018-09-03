import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import ExchangePricesPerCoinPairContainer from './exchange_prices_per_coin_pair/exchange_prices_per_coin_pair_container';
import DonutChartContainer from './donut_chart/donut_chart_container';
import SignupSigninFormContainer from './signup_signin_form/signup_signin_form_container';
import CoinPairFormContainer from './coin_pair_form/coin_pair_form_container';
import NewsFeedContainer from './news_feed/news_feed_container';
import PreferencesModalContainer from './preferences_modal/preferences_modal_container';

const App = () => (
    <div className='container-fluid'>
      <div className="row">
        <SignupSigninFormContainer />
      </div>
      <div className="row mt-4 mx-5">
        <CoinPairFormContainer />
        <PreferencesModalContainer />
      </div>
      <div className="row">
        <ExchangePricesPerCoinPairContainer />
      </div>
      <div className="row">
        <DonutChartContainer />
      </div>
      <div className="row justify-content-center">
        <NewsFeedContainer />
      </div>
    </div>
);

export default App;
