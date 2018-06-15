import React, { Component } from 'react';
import "./Diet.css";
import BigButtonSelect from '../BigButtonSelect/BigButtonSelect';
import Footer from '../Footer/Footer';

import * as routes from '../../constants/routes';
class Diet extends Component {



    render() {

        return (
            <div className="DietDiv">
                <h3>In the last 24 hours...</h3>
                <h3>How healthy have your eating habits been?</h3>
                <BigButtonSelect items={this.props.user.diet} />
                <Footer edit={this.props.user.diet} route={routes.EDIT_DIET} next="food" />
            </div>

        );

    }
}


export default Diet;