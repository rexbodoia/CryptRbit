import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import NewsFeedContainer from './news_feed_container';

const App = () => (
  <div>
    <NewsFeedContainer />
  </div>
);

export default App;