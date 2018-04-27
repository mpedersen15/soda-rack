import React, { Component } from 'react';
import Flavor from '../Flavor/Flavor';

class FlavorList extends Component {

    render() {
        const renderFlavors = () => {
            return this.props.flavors.map(item => (<Flavor flavor={item}/>))
        };

        return (
            <div>
                {renderFlavors()}
            </div>
        );
    }
}

export default FlavorList;