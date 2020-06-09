import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AdminPage from './AdminPage';
import ProductsPage from './ProductsPage';
import Header from './Header';

const Routes: React.SFC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/products" component={ProductsPage} />
        <Route path="/admin" component={AdminPage} />
      </div>
    </Router>
  );
};

export default Routes;
