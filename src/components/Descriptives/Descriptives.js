import React, { Component } from 'react';
import "./Descriptives.css";
import Footer from '../Footer/Footer';
import WordSelect from '../WordSelect/WordSelect';

import * as routes from '../../constants/routes';

class Descriptives extends Component {

    render() {
        return (
            <div className="descriptivesDiv">
                <p>Select some words that describe how you are feeling today. When you're finished, click 'Submit.'</p>
                <WordSelect items={this.props.user.descriptives} />
                <Footer edit={this.props.user.descriptives} route={routes.EDIT_DESCRIPTIVES} next="activities" />
            </div>
        );

    }
}


export default Descriptives;