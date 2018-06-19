import React, { Component } from 'react';
import './Activities.css';
import IconSelect from '../IconSelect/IconSelect';
import Footer from '../Footer/Footer';

import * as routes from '../../constants/routes';

class Activities extends Component {

    render() {
        console.log("activities user", this.props.user.activities)
        return (
            <div className="activitiesDiv">
                <h2>What have you been up to today?</h2>
                <IconSelect type='activities' items={this.props.user.activities} />
                <Footer route='/activities/edit' edit={this.props.user.activites} route={routes.EDIT_ACTIVITIES} next="exercise" />
            </div>
        );

    }
}

export default Activities;