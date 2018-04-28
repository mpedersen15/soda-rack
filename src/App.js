import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// import FlavorList from './components/FlavorList/FlavorList';
// import StationList from './components/StationList/StationList';
import StationEditList from './components/EditStation/EditStation';
import Main from './components/Main/Main';
import { store } from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider>
            <div>

              <Route exact path="/" component={Main}/>
              <Route path="/stations/edit/:id" component={StationEditList}/>

            </div>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
