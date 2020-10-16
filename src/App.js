import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './redux/reducers';
import Routes from './routes';
import thunk from 'redux-thunk';

class App extends Component {
  render() {
    const store = createStore(
      reducers,
      {},
      compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : (f) => f
      )
    );
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
