import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import StationContainer from "./StationContainer";
import EditStation from "./EditStation";
class StationRoute extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/stations" component={StationContainer}/>
                <Route  path="/stations/:id" component={EditStation}/>
            </Switch>
        );
    }
}

export default StationRoute;
