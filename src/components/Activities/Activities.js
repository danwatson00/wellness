import React, { Component } from 'react';
import './Activities.css';
import IconSelect from '../IconSelect/IconSelect';
import Footer from '../Footer/Footer';

import * as routes from '../../constants/routes';

class Activities extends Component {

    render() {
        return (
            <div className="activitiesDiv">
                <h2>What have you been up to today?</h2>
                <IconSelect items={this.props.user.activities} />
                <Footer edit={this.props.user.activities} next="exercise" />
            </div>
        );

    }
}

export default Activities;