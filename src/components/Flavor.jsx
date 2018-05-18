import React from 'react';
import { ListItem } from 'material-ui/List';
import MapsLocalDrink from 'material-ui/svg-icons/maps/local-drink';

const Flavor = (props) => {
    return (
        <div className="flavor">
            <ListItem disabled={true} primaryText={props.flavor.name} leftIcon={<MapsLocalDrink />} />
        </div>
    );
}

export default Flavor;