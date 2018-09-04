import React, { Component } from 'react';
import './App.css';
import {HomePageContainer} from './Components/HomePage/HomePageContainer';
import {Provider} from 'react-redux';
import store from './Store/configStore';
class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <HomePageContainer/>
        </Provider>
    );
  }
}

export default App;
