import React, { PureComponent } from 'react';
import 'normalize.css';
import './App.scss';
import { SearchProvider } from 'components/common/header';
import Home from './pages/Home';

class App extends PureComponent {
  render() {
    return (
      <div>
        <SearchProvider>
          <Home />
        </SearchProvider>
      </div>
    );
  }
}

export default App;
