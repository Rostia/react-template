import React from 'react';
import HomePage from 'components/pages/Home';
import FilmPage from 'components/pages/Film';
import SearchPage from 'components/pages/Search';
import NotFoundPage from 'components/pages/NotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const Pages = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/film/:id">
        <FilmPage />
      </Route>
      <Route exact path="/search/:search">
        <SearchPage />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  </Router>

);

export default Pages;
