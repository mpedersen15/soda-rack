import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Flavor from '../Flavor/Flavor';
import { addFlavor } from '../../actions'
import { Card, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { List } from 'material-ui/List';

const style = {
    container: {
        padding: 20
    },
    input: {
        display: 'block'
    }
};

class FlavorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({ inputValue: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { dispatch } = this.props;
        const newFlavor = this.state.inputValue;
        this.setState({ inputValue: '' });
        if (newFlavor.length > 0) {
            dispatch(addFlavor({
                id: this.props.flavors.length + 1, 
                name: newFlavor
            }));
        }
    }

    render() {
        const renderFlavors = () => {
            return this.props.flavors.map(item => (<Flavor key={item.id} flavor={item}/>))
        };

        return (
            <div style={style.container}>
                <h1>Flavors</h1>

                <Card>
                    <CardHeader title="Add a new flavor"/>
                    <CardText>
                        <form onSubmit={this.handleSubmit}>
                            <TextField style={style.input} value={this.state.inputValue} onChange={this.handleInputChange} hintText="Add a new flavor" />
                            <RaisedButton type="submit">Add flavor</RaisedButton>
                        </form>
                        <List>
                            {renderFlavors()}
                        </List>
                    </CardText>
                </Card>
                
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