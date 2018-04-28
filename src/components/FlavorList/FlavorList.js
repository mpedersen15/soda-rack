import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Flavor from '../Flavor/Flavor';
import { addFlavor } from '../../actions'
class FlavorList extends Component {

    handleSubmit(e) {
        e.preventDefault();

        const { dispatch } = this.props;
        const newFlavor = this.refs.newFlavor.value;
        this.refs.newFlavor.value = '';
        if (newFlavor.length > 0) {
            dispatch(addFlavor({
                id: this.props.flavors.length + 1, 
                name: newFlavor
            }));
        }
    }

    render() {
        console.log('Flavor List props', this.props);
        const renderFlavors = () => {
            return this.props.flavors.map(item => (<Flavor key={item.id} flavor={item}/>))
        };

        return (
            <div>
                <h1>Flavors</h1>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input ref="newFlavor" type="text" placeholder="Add new flavor"/>
                    <button>Add</button>
                </form>
                {renderFlavors()}
            </div>
        );
    }
}

FlavorList.propTypes = {
    flavors: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
    }))
};

const mapStateToProps = state => ({
    flavors: state.flavors
});

export default connect(
    mapStateToProps
)(FlavorList);