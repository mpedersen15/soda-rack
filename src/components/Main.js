import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

import FlavorContainer from '../containers/FlavorContainer';
import StationContainer from '../containers/StationContainer';

class Main extends Component {
    render() {
        return (
            <Paper className="paper" zDepth={3}>
                <Tabs>
                    <Tab label="Refueling Stations" >
                        <StationContainer />
                    </Tab>
                    <Tab label="Soda Flavors" >
                        <FlavorContainer />
                    </Tab>
                </Tabs>
            </Paper>
        );
    }
}

export default Main;