import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import MapsLocalDrink from 'material-ui/svg-icons/maps/local-drink';

class Flavor extends Component {
    render() {
        return (
            <div className="flavor">
                <ListItem disabled={true} primaryText={this.props.flavor.name} leftIcon={<MapsLocalDrink />} />
            </div>
        );
    }
}

export default Flavor;