import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Flavor from '../Flavor/Flavor';
import { addFlavor } from '../../actions'
import { Card, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import ActionSearch from 'material-ui/svg-icons/action/search';

const style = {
    container: {
        padding: '0 20px 20px 20px'
    },
    input: {
        display: 'block'
    },
    card: {
        marginBottom: 20
    },
    icon: {
        marginTop: 14
    },
    searchItem: {
        padding: '0px 16px 16px 50px'
    },
    cardText: {
        padding: '0 16px'
    }
    
};

class FlavorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            filterValue: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({ inputValue: e.target.value });
    }

    handleFilterChange(e) {
        this.setState({ filterValue: e.target.value });
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
            return this.props.flavors.filter(flavor => flavor.name.includes(this.state.filterValue)).map(item => (<Flavor key={item.id} flavor={item}/>))
        };

        return (
            <div style={style.container}>
                <h1>Soda Flavors</h1>

                <Card style={style.card}>
                    <CardHeader title="Add a new flavor"/>
                    <CardText>
                        <form onSubmit={this.handleSubmit}>
                            <TextField style={style.input} value={this.state.inputValue} onChange={this.handleInputChange} hintText="Add a new flavor" />
                            <RaisedButton type="submit">Add flavor</RaisedButton>
                        </form>
                    </CardText>
                </Card>
                
                <Card>
                    <CardHeader title="Available flavors"/>
                    <CardText style={style.cardText}>
                        <List>
                        <ListItem style={style.searchItem} disabled={true} leftIcon={<ActionSearch style={style.icon}/>} children={<TextField style={style.input} value={this.state.filterValue} onChange={this.handleFilterChange} hintText="Filter soda by name" />}/>

                        {/* <TextField style={style.input} value={this.state.filterValue} onChange={this.handleFilterChange} hintText="Filter soda by name" /> */}
                        
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