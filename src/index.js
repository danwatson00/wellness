import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
