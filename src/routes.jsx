import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

import Login from './pages/Login';
import UserRegistration from './pages/UserRegistration';

// Hardcode until connect with back
const isAuthenticated = () => false;

// eslint-disable-next-line no-unused-vars
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    render={(props) => (!isAuthenticated() ? (
      <Redirect
        to={{ pathname: '/login', state: { from: props.location } }}
      />
    ) : (
    // eslint-disable-next-line react/jsx-props-no-spreading
      <Component {...props} />
    ))}
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact component={() => <h1> </h1>} />
        <Route path="/login" exact component={Login} />
        <Route path="/user_registration" exact component={UserRegistration} />
      </Switch>
    </BrowserRouter>
  );
}
