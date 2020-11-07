import React from 'react';
import Home from 'components/pages/Home';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from 'reducers';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import { fetchMovies } from 'actions/movies';
import regeneratorRuntime from "regenerator-runtime";

const makeStore = context => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper(makeStore, {debug: true});

function HomePage() {
  return <Home />
}

HomePage.getInitialProps = async ({ store }) => {
  await store.dispatch(fetchMovies({sortBy: "release_date"}));
};

export default wrapper.withRedux(HomePage);