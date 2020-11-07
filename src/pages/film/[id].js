import React from 'react';
import Film from 'components/pages/Film';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from 'reducers';
import { createWrapper } from 'next-redux-wrapper';
import { fetchMovies, fetchMovie } from 'actions/movies';
import regeneratorRuntime from "regenerator-runtime";
import Url from 'url-parse';

const makeStore = context => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper(makeStore, {debug: true});

function FilmPage() {
  return <Film />;
}

FilmPage.getInitialProps = async ({ store, query }) => {
  const { id } = query;
  await store.dispatch(fetchMovies({sortBy: "release_date"}));
  await store.dispatch(fetchMovie(id));
};

export default wrapper.withRedux(FilmPage);