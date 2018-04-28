import React, { Component } from 'react';
import { connect } from 'react-redux';
import Station from '../Station/Station';
import { addStation } from '../../actions';

class StationList extends Component {
    handleSubmit(e) {
        e.preventDefault();

        const { dispatch } = this.props;

        const newStation = this.refs.newStation.value;
        this.refs.newStation.value = '';

        if (newStation.length > 0) {
            dispatch(addStation({
                id: this.props.stations.length + 1,
                name: newStation
            }));
        }
    }
    render() {
        console.log('Props: ', this.props);
        const renderStations = () => {
            return this.props.stations.map(item => (<Station key={item.id} station={item}/>))
        };

        return (
            <div>
                <h1>Stations</h1>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input ref="newStation" type="text" placeholder="New station name"/>
                    <button>Add Station</button>
                </form>
                {renderStations()}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        stations: state.stations.map(station => {
            return {
                ...station,
                flavors: station.flavors.map(flavor => {
                    console.log('Flavor to map', flavor);
                    const fullFlavor = state.flavors.find(f => f.id === flavor);
                    console.log('Full Flavor', fullFlavor);
                    console.log('Full Flavor name', fullFlavor.name);
                    return fullFlavor;
                })
            }
        })
    }
};

export default connect(mapStateToProps)(StationList);