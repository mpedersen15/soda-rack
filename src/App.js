import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Flavor from './components/Flavor/Flavor';
import FlavorList from './components/FlavorList/FlavorList';
import Station from './components/Station/Station';
import StationList from './components/StationList/StationList';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}

          {/* <Flavor />
          <FlavorList />
          <Station />
          <StationList /> */}

          <Link to={'/'}>Stations</Link>
          <Link to={'/flavors'}>Flavors</Link>

          <Route exact path="/" component={StationList}/>
          <Route path="/flavors" render={() => (<FlavorList flavors={['Coke', 'Sprite']}/>)}/>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
