import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import NavBar from 'components/Navbar';
import Catalog from 'pages/Catalog';
import Home from 'pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/rodadas">
          <Catalog />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
