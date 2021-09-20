import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Form from './pages/Form';
import UserRegistration from './pages/UserRegistration';

import Evaluation from './pages/Views/Evaluation';
import EvaluationForm from './pages/Views/Evaluation/ListForms';
import FormAdmin from './pages/Views/FormAdmin';
import History from './pages/Views/History';

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

const AdvisorCCPRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => ((isAdvisorAuthenticated() || isAdminAuthenticated()) ? (
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
        <AdvisorCCPRoute exact path="/evaluation" component={EvaluationForm} />
        <AdvisorCCPRoute exact path="/evaluation/:form_id" component={Evaluation} />
        <AdminRoute exact path="/ccp/form" component={FormAdmin} />
        <StudentRoute path="/history" exact component={History} />
        <StudentRoute path="/form" exact component={Form} />
        <LoggedRoute path="/personal_data" exact component={PersonalData} />
      </Switch>
    </BrowserRouter>
  );
}
