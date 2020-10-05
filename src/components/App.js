import React, { PureComponent } from 'react';
import 'normalize.css';
import './App.scss';
import Pages from 'components/pages';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from 'reducers';

const store = createStore(reducer, applyMiddleware(thunk));

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Pages />
        </div>
      </Provider>
    );
  }
}

export default App;
