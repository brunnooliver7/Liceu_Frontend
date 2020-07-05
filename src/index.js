import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Registry from './components/Registry';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={ true } component={ App } />
        <Route path="/registry" component={ Registry } />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);