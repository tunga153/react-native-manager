import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDSVqCQ53y7uv7TogdW9rhwOzIDXAUefqM',
      authDomain: 'manager-9fe84.firebaseapp.com',
      databaseURL: 'https://manager-9fe84.firebaseio.com',
      storageBucket: 'manager-9fe84.appspot.com',
      messagingSenderId: '943703539393'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
