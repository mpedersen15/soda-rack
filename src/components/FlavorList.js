import React, { Component } from 'react';
import Flavor from './Flavor';
import { List, ListItem } from 'material-ui/List';
import ActionSearch from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';



/* const style = {
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
        marginTop: 27
    },
    searchItem: {
        padding: '0px 16px 16px 50px'
    },
    cardText: {
        padding: '0 16px'
    }
    
}; */

class FlavorList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterValue: ''
        };

        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(e) {
        this.setState({ filterValue: e.target.value });
    }

    render() {
        const renderFlavors = () => {
            return this.props.flavors
                .filter(flavor => flavor.name.toLowerCase().includes(this.state.filterValue.toLowerCase()))
                .map(item => (<Flavor key={item.id} flavor={item}/>));
        };
    
        return (
            <List>
                {this.props.showFilter ? 
                <ListItem 
                    disabled={true} 
                    leftIcon={<ActionSearch className="search-icon"/>}
                    children={
                        <TextField 
                            className="text-input" 
                            key='filter-input' 
                            value={this.state.filterValue} 
                            onChange={this.handleFilterChange} 
                            hintText="Filter soda by name" 
                        />
                    }
                /> : ''}
                {renderFlavors()}
            </List>
        );
    }
    
}

export default FlavorList;