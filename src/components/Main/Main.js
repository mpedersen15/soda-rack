import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

import StationList from '../StationList/StationList';
import FlavorList from '../FlavorList/FlavorList';

const style = {
    paper: {
        maxWidth: 700,
        margin: '20px auto'
    }
};

class Main extends Component {
    render() {
        return (
            <Paper style={style.paper} zDepth={3}>
                <Tabs>
                    <Tab label="Stations" >
                        <StationList/>
                    </Tab>
                    <Tab label="Flavors" >
                        <FlavorList />
                    </Tab>
                </Tabs>
            </Paper>
        );
    }
}

export default Main;