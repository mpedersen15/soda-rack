import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card'; 
import { List, ListItem } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
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
    }
}

class Station extends Component {

    handleClick() {
        console.log('Trying to edit station with id: ', this.props.station.id);
    }
    render() {
        const renderFlavors = () => {
            const { flavors } = this.props.station;
            if (flavors.length) {
                return flavors.map((flavor, index) => {
                    return <ListItem disabled={true} key={index} primaryText={flavor.name} />
                    // return <li key={index}>{flavor.name}</li>
                });
            }
            
        }

        return (
            <Card style={style.card}>
                <CardHeader title={this.props.station.name} />
                <CardText>
                    <List>
                        <Subheader>Sodas at this location</Subheader>
                        {renderFlavors()}
                    </List>
                </CardText>

                <FlatButton
                icon={<EditorModeEdit />}
                style={style.button}
                />
            </Card>
        );

        /* return (
            <div>
               <p>{this.props.station.name}</p>
               <ul>
                   {renderFlavors()}
               </ul>
               <Link to={`/stations/edit/${this.props.station.id}`}>Edit</Link>
            </div>
        ); */
    }
}

export default Station;