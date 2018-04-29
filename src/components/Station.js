import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Card, CardHeader, CardText} from 'material-ui/Card'; 
import { List } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';

import FlavorList from './FlavorList';

const style = {
    card: {
        marginBottom: 20,
        position: 'relative'
    },
    button: {
        position: 'absolute',
        top: 5,
        right: 5,
        minWidth: 36
    },
    link: {
        display: 'block',
        paddingTop: 5
    }
}

class Station extends Component {
    render() {
        const renderFlavors = () => {
            const { flavors } = this.props.station;
            if (flavors.length) {
                return <FlavorList showFilter={false} flavors={flavors} />;
            } else {
                return <p>No soda flavors added to this station. Edit station to add flavors.</p>;
            }
            
        }

        return (
            <Card style={style.card}>
                <CardHeader title={this.props.station.name} />
                <CardText className="card-content">
                    <List>
                        <Subheader>Sodas at this location</Subheader>
                        {renderFlavors()}
                    </List>
                </CardText>

                <FlatButton
                style={style.button}
                children={
                    <Link 
                        style={style.link} 
                        key={this.props.station.id} 
                        to={`/stations/edit/${this.props.station.id}`}
                    >
                        <EditorModeEdit />
                    </Link>}
                />
            </Card>
        );
    }
}

export default Station;