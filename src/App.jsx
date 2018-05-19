import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Paper from 'material-ui/Paper';

import './App.css';
import Header from './components/Header';
import FlavorContainer from './containers/FlavorContainer';
import StationRoute from './containers/StationRoute';


class App extends Component {
  render() {
    return (
      <div>
        <Paper className="paper" zDepth={3}>
          <Header />
          <Switch> 
            <Route exact path="/" render={() => (<Redirect to={`/stations`}/>)}/>
            <Route path="/flavors" component={FlavorContainer}/>
            <Route path="/stations" component={StationRoute}/>
          </Switch>
        </Paper>

        {/* <Route path="/stations/edit/:id" render={() => ( store.getState().stations.length ? <StationEditList /> : <Redirect to="/" /> )}/> */}

      </div>
    );
  }
}

export default App;
