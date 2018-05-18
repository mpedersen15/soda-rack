import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

import {
    store
} from './store';
import   App from './App';
import './index.css';

ReactDOM.render(( 
    <Provider store={store}>
        <Router> 
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider> 
        </Router> 
    </Provider>
), document.getElementById('root'));
registerServiceWorker();