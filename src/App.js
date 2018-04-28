import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import FlavorList from './components/FlavorList/FlavorList';
import StationList from './components/StationList/StationList';
import StationEditList from './components/EditStation/EditStation';
// import Main from './components/Main/Main';
import { store } from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider>
            <div>
              <Link to={'/'}>Stations</Link>
              <Link to={'/flavors'}>Flavors</Link>

              <Route exact path="/" component={StationList}/>
              <Route path="/flavors" component={FlavorList}/>
              <Route path="/stations/edit/:id" component={StationEditList}/>

            </div>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
