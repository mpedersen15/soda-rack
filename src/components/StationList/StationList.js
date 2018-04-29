import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Station from '../Station/Station';
import TextField from 'material-ui/TextField';
import { addStation } from '../../actions';
import { FlatButton } from 'material-ui';
import ActionSearch from 'material-ui/svg-icons/action/search';
import { ListItem } from 'material-ui/List';

const style = {
    container: {
        padding: 20
    },
    card: {
        marginBottom: 20
    },
    input: {
        display: 'block'
    },
    icon: {
        marginTop: 30
    },
    searchItem: {
        padding: '16px 16px 16px 50px'
    }
};

class StationList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            filterValue: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleFilterChange(e) {
        this.setState({ filterValue: e.target.value });
    }

    handleInputChange(e) {
        this.setState({ inputValue: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { dispatch } = this.props;
        const newStation = this.state.inputValue;
        this.setState({ inputValue: '' });

        if (newStation.length > 0) {
            dispatch(addStation({
                id: this.props.stations.length + 1,
                name: newStation,
                flavors: []
            }));
        }
    }
    render() {
        const renderStations = () => {
            if (this.props.stations.length) {
                return [
                    <ListItem key={'search-filter'}style={style.searchItem} disabled={true} leftIcon={<ActionSearch style={style.icon}/>} children={<TextField key='filter-input' style={style.input} value={this.state.filterValue} onChange={this.handleFilterChange} hintText="Filter stations by soda flavor" />}/>,
                    ...this.props.stations.filter(station => {
                        if (!this.state.filterValue) { return true; }
        
                        return station.flavors.some(flavor => flavor.name.toLowerCase().includes(this.state.filterValue.toLowerCase()));
        
                    }).map(item => (<Station key={item.id} station={item}/>))
                ];   
            } else {
                return (<p>There no Refueling Stations created. Use the form above to create the first!</p>);
            }
            
        };

        return (
            <div className="tab-container">
                <Card style={style.card}>
                    <CardHeader title="Add a new Refueling Station"/>
                    <CardText className="card-content">
                    <form onSubmit={this.handleSubmit}>
                        <TextField style={style.input} value={this.state.inputValue} onChange={this.handleInputChange} hintText="New station name" />
                        <FlatButton type="submit">Add Station</FlatButton>
                    </form>
                    </CardText>
                </Card>
                {/* <ListItem style={style.searchItem} disabled={true} leftIcon={<ActionSearch style={style.icon}/>} children={<TextField key='filter-input' style={style.input} value={this.state.filterValue} onChange={this.handleFilterChange} hintText="Filter stations by soda flavor" />}/> */}
                {renderStations()}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        stations: state.stations.map(station => {
            return {
                ...station,
                flavors: station.flavors.map(flavor => state.flavors.find(f => f.id === flavor))
            }
        })
    }
};

export default connect(mapStateToProps)(StationList);