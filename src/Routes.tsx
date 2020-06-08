import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AdminPage from './AdminPage';
import ProductsPage from './ProductsPage';

const Routes: React.SFC = () => {
  return (
    <Router>
      <div>
        <Route path="/products" component={ProductsPage} />
        <Route path="/admin" component={AdminPage} />
      </div>
    </Router>
  );
};

export default Routes;
