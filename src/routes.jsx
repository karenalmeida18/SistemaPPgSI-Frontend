import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

import Login from './pages/login';

// Hardcode until connect with back
const isAuthenticated = () => false;

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
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/" component={() => <h1> home </h1>} />
      </Switch>
    </BrowserRouter>
  );
}
