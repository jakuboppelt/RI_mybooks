import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import { AppContainer } from './components/App/';
import { SearchContainer } from './components/Search/';
import { getStore } from './store';
import './index.css';

const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={AppContainer} />
      <Route path="/search" component={SearchContainer} />
    </Switch>
  </Provider>, document.getElementById('root')
);