import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import MapsLocalDrink from 'material-ui/svg-icons/maps/local-drink';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

import { updateStation } from '../actions';
import FlavorList from '../components/FlavorList';

class EditStation extends Component {

    handleAdd(flavor) {
        const { dispatch } = this.props;

        dispatch(updateStation(this.props.station.id, flavor.id));
    }

    render() {
        const { station, unavailableFlavors } = this.props;

        const renderAvailableFlavors = () => {
            if (!station.flavors.length) { return <p>There are no flavors at this station. Add flavors below or visit the Soda Flavors tab to add new flavors.</p>}

            return <FlavorList showFilter={false} flavors={station.flavors} />
        }

        const renderUnavailableFlavors = () => {
            if (!unavailableFlavors.length) { return <p>There are no unavailble flavors. Visit the Soda Flavors tab to add new flavors.</p>}
            return unavailableFlavors.map((flavor, i) => (
                <ListItem
                    key={'unavail-'+i}
                    disabled={true} 
                    primaryText={flavor.name} 
                    leftIcon={<MapsLocalDrink />} 
                    rightIconButton={<IconButton tooltip="Add flavor to station" onClick={() => this.handleAdd(flavor)}><ContentAdd /></IconButton>}
                />
            ));
        }

        return (
            <Paper className="paper" zDepth={3}>
                <AppBar className="bar" showMenuIconButton={false} title={<div className="bar__text">Edit {station.name}</div>} />
                <div className="card-content">
                    <List>
                        <Subheader>Sodas available at this station:</Subheader>
                        {renderAvailableFlavors()}
                    </List>

                    <List>
                    <Subheader>Sodas NOT available at this station:</Subheader>
                        {renderUnavailableFlavors()}
                    </List>
                    <p style={{textAlign: 'right'}}>
                        <FlatButton children={<Link key={'done-link'} className="button-link" to="/">Done</Link>}/>
                    </p>
                    
                </div>
                
            </Paper>
        );
    }
}

const mapStateToProps = (state, ownProps) =>{
    const unpopulatedStation = state.stations.find(station => station.id === parseInt(ownProps.match.params.id, 10));
    return {
        station: { 
            ...unpopulatedStation,
            flavors: unpopulatedStation.flavors.map(flavorId => state.flavors.find(f => f.id === flavorId))
        },
        unavailableFlavors: state.flavors.filter(flavor => unpopulatedStation.flavors.indexOf(flavor.id) === -1)
    };
};

export default withRouter(connect(mapStateToProps)(EditStation));