import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
