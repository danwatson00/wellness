import React, { Component } from 'react';
import "./Meds.css";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';


import * as routes from '../../constants/routes';

class Meds extends Component {



    render() {

        const userMeds = this.props.user.meds.map((med) => (

            <Button key={med} className="medsButtons" size="sm" outline color="light">{med.brand}{med.dosage}</Button>
        ))

        return (
            <div className="MedsDiv">
                <p>Select any Medication you have taken in the last 24 hours.</p>
                <div className="MedsCardsDiv">
                    {userMeds}
                </div>
                <Link to={`/food`} className="backLink float-left">Back</Link>
                <Link to={`/journal`}><Button className="medsSubmitBtn float-right">Next</Button></Link>

            </div>

        );

    }
}


export default Meds;