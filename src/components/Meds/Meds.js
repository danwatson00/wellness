import React, { Component } from 'react';
import "./Meds.css";
import { Button } from 'reactstrap';
import Footer from '../Footer/Footer';

import * as routes from '../../constants/routes';

class Meds extends Component {

    render() {

        const medsArray = Object.values(this.props.user.meds)
        console.log("medsArray", medsArray)
        const userMeds = medsArray.map((med) => (

            <Button key={med} className="medsButton" outline color="light">{med.brand} - {med.dosage}</Button>
        ))

        return (
            <div className="MedsDiv">
                <h2>Select any Medication you have taken in the last 24 hours.</h2>
                <div className="MedsCardsDiv">
                    {userMeds}
                </div>
                <Footer edit={this.props.user.meds} route={routes.EDIT_MEDS} next="journal" />
            </div>

        );

    }
}


export default Meds;