import React, { Component } from 'react';
import "./Sleep.css";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

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
                <div className="sleepCardsDiv">
                    {userSleep}
                </div>
                <Link to={`/exercise`} className="backLink float-left">Back</Link>
                <Link to={`/diet`}><Button className="sleepSubmitBtn float-right">Next</Button></Link>

            </div>

        );

    }
}


export default Sleep;