import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Details from '../pages/Details';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details/:character+" component={Details} />
    </Switch>
  );
};

export default Routes;
