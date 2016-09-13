'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={LandingPage}/>
  </Route>


);

export default routes;
