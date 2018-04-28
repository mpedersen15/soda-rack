import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Station extends Component {

    handleClick() {
        console.log('Trying to edit station with id: ', this.props.station.id);
    }
    render() {
        return (
            <div>
               {this.props.station.name}
               <Link to={`/stations/edit/${this.props.station.id}`}>Edit</Link>
            </div>
        );
    }
}

export default Station;