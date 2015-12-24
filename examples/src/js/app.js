import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

const history = createHistory({ queryKey: false });

import App from './components/App';
import Examples from './components/Examples';

const routes = (
  <Router history={ history }>
    <Route path="/" component={App}>
      <IndexRoute component={Examples}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
