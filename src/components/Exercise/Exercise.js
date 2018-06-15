import React, { Component } from 'react';
import "./Exercise.css";
import BigButtonSelect from '../BigButtonSelect/BigButtonSelect';
import Footer from '../Footer/Footer';

import * as routes from '../../constants/routes';

class Exercise extends Component {



    render() {

        return (
            <div className="exerciseDiv">
                <h3>In the last 24 hours...</h3>
                <h3>How physically active have you been?</h3>
                <BigButtonSelect items={this.props.user.exercise} />
                <Footer edit={this.props.user.exercise} route={routes.EDIT_EXERCISE} next="sleep" />
            </div>

        );

    }
}

export default Exercise;