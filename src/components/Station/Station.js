import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Station extends Component {

    handleClick() {
        console.log('Trying to edit station with id: ', this.props.station.id);
    }
    render() {
        const renderFlavors = () => {
            const { flavors } = this.props.station;
            if (flavors.length) {
                return flavors.map((flavor, index) => {
                    return <li key={index}>{flavor.name}</li>
                });
            }
            
        }

        return (
            <div>
               <p>{this.props.station.name}</p>
               <ul>
                   {renderFlavors()}
               </ul>
               <Link to={`/stations/edit/${this.props.station.id}`}>Edit</Link>
            </div>
        );
    }
}

export default Station;