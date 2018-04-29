import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addFlavor } from '../actions';
import AddFlavor from '../components/AddFlavor';
import FlavorList from '../components/FlavorList';

class FlavorContainer extends Component {

    constructor(props) {
        super(props);

        this.handleAddFlavor = this.handleAddFlavor.bind(this);
    }

    handleAddFlavor(flavorName) {
        console.log('New flavor to add: ', flavorName);
        this.props.dispatch(addFlavor({id: this.props.flavors.length + 1, name: flavorName}));
    }

    render() {
        return (
            <div className="tab-container">
                <AddFlavor onAddFlavor={this.handleAddFlavor} />
                <FlavorList showFilter={true} flavors={this.props.flavors}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    flavors: state.flavors
});

export default connect(mapStateToProps)(FlavorContainer);