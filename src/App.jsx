import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/LoginComponent';
import SignUp from './components/SignUpComponent';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  </div>
);

export default App;
