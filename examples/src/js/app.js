import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

const history = createHistory( { queryKey: false } );

import App from './components/App';

const routes = (
  <Router history={ history }>
    <Route path="/" component={App}/>
  </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
