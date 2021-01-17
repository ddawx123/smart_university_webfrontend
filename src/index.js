import React from 'react';
import ReactDOM from 'react-dom';
// import { hashHistory } from 'react-router';
import { HashRouter as Router, Route, hashHistory, Switch } from 'react-router-dom';
import HomePage from './Components/Home/Dashboard';
import GPACalculator from './Components/Utils/GPACalculator';
import HealthCodeCenter from './Components/Utils/HealthCodeCenter';
import LoginPage  from './Components/User/Login';
import UndefinedPage from './Components/Exception/UndefinedPage';
import './Components/darkSupport.css';


ReactDOM.render(
  <Router history={ hashHistory }>
    <Switch>
      <Route path="/" exact component={ HomePage } />
      <Route path="/gpaCalculator" component={ GPACalculator } />
      <Route path="/utilsBox/healthCodeCenter" component={ HealthCodeCenter } />
      <Route path="/Login" component={ LoginPage } />
      <Route path="*" component={ UndefinedPage } />
    </Switch>
  </Router>,
  document.getElementById('root')
);
