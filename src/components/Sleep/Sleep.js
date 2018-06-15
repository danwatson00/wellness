import React, { Component } from 'react';
import "./Sleep.css";
import BigButtonSelect from '../BigButtonSelect/BigButtonSelect';
import Footer from '../Footer/Footer';

import * as routes from '../../constants/routes';

class Sleep extends Component {



    render() {

        return (
            <div className="sleepDiv">
                <h4>In the last 24 hours...</h4>
                <h4>How much have you slept?</h4>
                <BigButtonSelect items={this.props.user.sleep} />
                <Footer edit={this.props.user.sleep} route={routes.EDIT_SLEEP} next="diet" />

            </div>

        );

    }
}


export default Sleep;