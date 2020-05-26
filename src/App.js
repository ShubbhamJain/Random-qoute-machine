import React from 'react';
import './App.scss';
import {Provider} from 'react-redux';
import store from './store';
import DisplayQuote from './components/DisplayQuote';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DisplayQuote />
      </Provider>
    )
  }
}

export default App;
