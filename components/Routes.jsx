import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Motivation from './FooterLinks/Motivation.jsx'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/motivation" component={Motivation} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
