import React, { Component } from 'react';
import './Flavor.css';
import RaisedButton from 'material-ui/RaisedButton';

class Flavor extends Component {
    render() {
        return (
            <div className="flavor">
                <RaisedButton label={this.props.flavor.name} />
            </div>
        );
    }
}

export default Flavor;