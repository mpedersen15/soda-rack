
import React, {Component} from 'react';
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';

import Station from './Station';

export class StationList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterValue: ''
        };

        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(e) {
        this.setState({ filterValue: e.target.value })
    }

    render() {
        const renderStations = () => {
            if (this.props.stations.length) {
                return this.props.stations.filter(station => {
                        if (!this.state.filterValue) { return true; }
        
                        return station.flavors.some(flavor => flavor.name.toLowerCase().includes(this.state.filterValue.toLowerCase()));
        
                    }).map(item => (<Station key={item.id} station={item}/>));   
            } else {
                return (<p>There no Refueling Stations created. Use the form above to create the first!</p>);
            }
            
        };

        return (
            <List>
                <ListItem 
                key={'search-filter'} 
                disabled={true} 
                leftIcon={<ActionSearch className="search-icon"/>} 
                children={
                    <TextField 
                        key='filter-input' 
                        value={this.state.filterValue} 
                        onChange={this.handleFilterChange} 
                        hintText="Filter stations by soda flavor"
                    />}
                />
                {renderStations()}
            </List>
        );
    }
}

export default StationList;