import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Container from '../containers/Container';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default App;
