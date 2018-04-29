import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addStation } from '../actions';
import AddStation from '../components/AddStation';
import StationList from '../components/StationList';

class StationContainer extends Component {
    constructor(props) {
        super(props);

        this.handleAddStation = this.handleAddStation.bind(this);
    }

    handleAddStation(name) {
        console.log('Dispatching add station', name);
        this.props.dispatch(addStation({id: this.props.stations.length + 1, name, flavors: []}))
    }

    render() {
        return (
            <div className="tab-container">
                <AddStation onAddStation={this.handleAddStation} />
                <StationList stations={this.props.stations}/>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        stations: state.stations.map(station => {
            return {
                ...station,
                flavors: station.flavors.map(flavor => state.flavors.find(f => f.id === flavor))
            }
        })
    }
};

export default connect(mapStateToProps)(StationContainer);