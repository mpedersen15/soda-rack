import {
    Component
} from "react";

const testObj = {
    test: 'blah'
}


testObj = 'blah'


class NewComponent extends Component {
    contructor() {
        super(props);
        this.handleRandomFunction = this.handleRandomFunction.bind(this);

        if (true) {
            //console.log('do this');
        }
    }
}