import React, { Component } from 'react';
import Flavor from './Flavor';
import { List, ListItem } from 'material-ui/List';
import ActionSearch from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';

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
            const flavorsToRender = this.props.flavors.filter(flavor => flavor.name.toLowerCase().includes(this.state.filterValue.toLowerCase()));
            if (flavorsToRender.length) {
                return flavorsToRender.map(item => (<Flavor key={item.id} flavor={item}/>));
            } 
            return <p>There are no flavors available for Refueling Stations. Add flavors with the form above.</p>
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