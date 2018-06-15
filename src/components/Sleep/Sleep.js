import React, { Component } from 'react';
import "./Sleep.css";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import BigButtonSelect from '../BigButtonSelect/BigButtonSelect';
import Footer from '../Footer/Footer';

import * as routes from '../../constants/routes';

class Sleep extends Component {



    render() {

        const userSleep = this.props.user.sleep.map((ex) => (

            <Button key={ex.text} className="exButtons" size="lg" outline color="light">{ex}</Button>
        ))

        return (
            <div className="sleepDiv">
                <h3>In the last 24 hours...</h3>
                <h3>How much have you slept?</h3>
                <BigButtonSelect items={this.props.user.sleep} />
                <Footer next="diet" />

            </div>

        );

    }
}


export default Sleep;