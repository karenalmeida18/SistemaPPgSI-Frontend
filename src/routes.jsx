import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

import Login from './pages/Login';
import UserRegistration from './pages/UserRegistration';

import { isAdminAuthenticated, isAdvisorAuthenticated, isStudentAuthenticated } from './services/auth';

// react/jsx-props-no-spreading
/* eslint-disable */
const StudentRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isStudentAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    ))}
  />
);

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => ((isAdminAuthenticated()) ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    ))}
  />
);

const AdvisorRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => ((isAdvisorAuthenticated()) ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    ))}
  />
);

const LoggedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (((isStudentAuthenticated) || (isAdvisorAuthenticated) || (isAdminAuthenticated)) ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    ))}
  />
);
/* eslint-enable */

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <LoggedRoute path="/" exact component={() => <h1> </h1>} />
        <Route path="/login" exact component={Login} />
        <Route path="/user_registration" exact component={UserRegistration} />
      </Switch>
    </BrowserRouter>
  );
}
