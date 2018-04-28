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
    return {
        stations: state.stations
    }
};

export default connect(mapStateToProps)(StationList);