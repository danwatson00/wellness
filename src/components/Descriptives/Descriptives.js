import React, { Component } from 'react';
import "./Descriptives.css";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';


import * as routes from '../../constants/routes';

class Descriptives extends Component {



    render() {

        const userDescriptives = this.props.user.descriptives.map((desc) => (
            
            <Button key={desc} className="descButtons" size="sm" outline color="light">{desc}</Button>
        ))
        console.log("in Descriptives", this.props.user.descriptives)

        return (
            <div className="descriptivesDiv">
                <p>Select some words that help describe how you are feeling or how your day went. When you have selected all of the words you'd like to include, click the submit button to move onto the next step.</p>
                <div className="descriptivesCardsDiv">
                    {userDescriptives}
                </div>
                <Link to={`/feelings`}className="backLink float-left">Back</Link>
                <Link to={`/activities`}><Button className="descSubmitBtn float-right">Next</Button></Link>

            </div>

        );

    }
}


export default Descriptives;