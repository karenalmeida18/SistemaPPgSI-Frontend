import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Form from './pages/Form';
import UserRegistration from './pages/UserRegistration';

import Evaluation from './pages/Views/Evaluation';

import { isAdminAuthenticated, isAdvisorAuthenticated, isStudentAuthenticated } from './services/auth';
import PersonalData from './pages/PersonalData';

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
        <LoggedRoute path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/user_registration" exact component={UserRegistration} />
        <Evaluation path="/evaluation" component={Evaluation} />
        <StudentRoute path="/form" exact component={Form} />
        <LoggedRoute path="/personal_data" exact component={PersonalData} />
      </Switch>
    </BrowserRouter>
  );
}
