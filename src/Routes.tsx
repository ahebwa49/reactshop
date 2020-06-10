import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import AdminPage from './AdminPage';
import ProductsPage from './ProductsPage';
import Header from './Header';
import ProductPage from './ProductPage';
import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';

const Routes: React.SFC = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <Router>
      <Header />
      <Switch>
        <Redirect exact={true} from="/" to="/products" />
        <Route exact={true} path="/products" component={ProductsPage} />
        <Route path="/products/:id" component={ProductPage} />
        <Route path="/admin">
          {loggedIn ? <AdminPage /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
