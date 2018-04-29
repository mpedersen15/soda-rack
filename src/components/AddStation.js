import React, { Component } from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class AddStation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddStation(this.state.inputValue);
        this.setState({ inputValue: '' });
    }

    handleInputChange(e) {
        this.setState({ inputValue: e.target.value });
    }

    render() {
        return (
            <Card>
                <CardHeader title="Add a new Refueling Station"/>
                <CardText className="card-content">
                <form onSubmit={this.handleSubmit}>
                    <TextField value={this.state.inputValue} onChange={this.handleInputChange} hintText="New station name" />
                    <FlatButton type="submit">Add Station</FlatButton>
                </form>
                </CardText>
            </Card>
        );
    }
}

export default AddStation;