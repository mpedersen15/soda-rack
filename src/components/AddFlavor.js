import React, { Component } from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class AddFlavor extends Component {
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
        this.props.onAddFlavor(this.state.inputValue);
        this.setState({ inputValue: '' });
    }

    handleInputChange(e) {
        this.setState({ inputValue: e.target.value });
    }

    render() {
        return (
            <Card>
                <CardHeader title="Add a new flavor"/>
                <CardText className="card-content">
                    <form onSubmit={this.handleSubmit}>
                        <TextField className="text-input" value={this.state.inputValue} onChange={this.handleInputChange} hintText="Add a new flavor" />
                        <FlatButton type="submit">Add flavor</FlatButton>
                    </form>
                </CardText>
            </Card>
        );
    }
}

export default AddFlavor;