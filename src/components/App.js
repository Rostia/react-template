import React, { PureComponent } from 'react';
import 'normalize.css';
import './App.scss';
import Home from './pages/Home';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
