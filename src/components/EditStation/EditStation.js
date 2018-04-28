import React, { Component } from 'react';

class EditStation extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                Editting station: {this.props.match.params.id}
            </div>
        );
    }
}

export default EditStation;