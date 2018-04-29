import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateStation } from '../../actions';

class EditStation extends Component {

    handleAdd(flavor) {
        const { dispatch } = this.props;

        dispatch(updateStation(this.props.station.id, flavor.id));
    }

    render() {
        console.log('Edit Station', this.props);
        const { station, unavailableFlavors } = this.props;

        const renderAvailableFlavors = () => {
            console.log('station flavors', station.flavors);
            return station.flavors.map((flavor, i) => (<li key={i}>{flavor.name} </li>));
        }

        const renderUnavailableFlavors = () => {
            return unavailableFlavors.map((flavor, i) => (<li key={i}>{flavor.name} <button onClick={() => this.handleAdd(flavor)}>Add</button></li>));
        }

        return (
            <div>
                Editting station: {station.name}
                <p>Sodas available at this station:</p>
                <ul>
                    {renderAvailableFlavors()}
                </ul>

                <p>Sodas NOT available at this station:</p>
                <ul>
                    {renderUnavailableFlavors()}
                </ul>
                <Link to="/">Done</Link>
            </div>
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

export default connect(mapStateToProps)(EditStation);