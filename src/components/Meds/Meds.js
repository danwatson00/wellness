import React, { Component } from 'react';
import "./Meds.css";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Footer from '../Footer/Footer';

class Meds extends Component {

    render() {

        const userMeds = this.props.user.meds.map((med) => (

            <Button key={med} className="medsButton" outline color="light">{med.brand} - {med.dosage}</Button>
        ))

        return (
            <div className="MedsDiv">
                <h2>Select any Medication you have taken in the last 24 hours.</h2>
                <div className="MedsCardsDiv">
                    {userMeds}
                </div>
                <Footer next="journal" />
            </div>

        );

    }
}


export default Meds;