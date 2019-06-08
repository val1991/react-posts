import React, { Component } from 'react';

import './App.css';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import setupStore from './application/store';

import { Api } from './helpers/ApiClient';

import Root from './application/container/Root';

const history = createBrowserHistory();
const { store, persistor } = setupStore(history);

Api.init();

class App extends Component {
  state = {
    error: null,
  };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    if (error) {
      return (
        <div>
          <div>Something went wrong</div>
        </div>
        );
    }
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <Root />
          </ConnectedRouter>
        </PersistGate>
      </Provider>

    );
  }
}

export default App;
