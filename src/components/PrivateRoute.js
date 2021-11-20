import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...props }) => {
  const [isAuth] = useState(localStorage.getItem('authorized') === '1');

  return (
    <Route
      {...props}
      render={() => (isAuth ? children : <Redirect to='/login' />)}
    />
  );
};

export default PrivateRoute;
