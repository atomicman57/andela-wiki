import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Motivation from './FooterLinks/Motivation.jsx'
import HowToUse from './FooterLinks/HowToUse.jsx'
import BugReport from './FooterLinks/BugReport.jsx'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/motivation" component={Motivation} />
      <Route exact path="/how-to-use" component={HowToUse} />
      <Route exact path="/report-bug" component={BugReport} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
