import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Station from '../Station/Station';
import TextField from 'material-ui/TextField';
import { addStation } from '../../actions';
import { RaisedButton } from 'material-ui';

const style = {
    container: {
        padding: 20
    },
    card: {
        marginBottom: 20
    },
    input: {
        display: 'block'
    }
};

class StationList extends Component {
    handleSubmit(e) {
        e.preventDefault();

        const { dispatch } = this.props;
        const newStation = this.refs.newStation.getValue();
        this.refs.newStation.value = '';

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
            return this.props.stations.map(item => (<Station key={item.id} station={item}/>))
        };

        return (
            <div style={style.container}>
                <h1>Stations</h1>
                <Card style={style.card}>
                    <CardHeader title="Create a new station"/>
                    <CardText>
                    <form>
                        <TextField style={style.input} ref="newStation" hintText="New station name" />
                        <RaisedButton onClick={this.handleSubmit.bind(this)}>AddStation</RaisedButton>
                    </form>
                    </CardText>
                </Card>
                
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