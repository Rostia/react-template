import React, { PureComponent } from 'react';
import 'normalize.css';
import './App.scss';
import { SearchProvider } from 'components/common/header';
import Pages from 'components/pages';

class App extends PureComponent {
  render() {
    return (
      <div>
        <SearchProvider>
          <Pages />
        </SearchProvider>
      </div>
    );
  }
}

export default App;
