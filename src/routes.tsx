import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import LoginPage from './Pages/Login';
import ProfilePage from './Pages/Profile';

const Routes = () => {

  return (
    <BrowserRouter >
      <Route component={LoginPage} path="/" exact/>
      <Route component={ProfilePage} path="/Profile" />
    </BrowserRouter >
  )
}

export default Routes;