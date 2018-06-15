import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import "./Feelings.css";

import * as routes from '../../constants/routes';

class Feelings extends Component {
    
    
    render() {
        
        const userFeelings = this.props.user.feelings.map(feeling => (
            <div key={"feeling-link-" + feeling.level} onClick={console.log("clicked", feeling)} className="feelngsDiv">
                <div key={"feeling-icon-" + feeling.level} className="feelingCard">
                    <img src={require(`./feelingIcons/${feeling.icon}.png`)} alt="feeling emoji" className="feelingIcon"></img>
                    <h3>{feeling.text}</h3>
                </div>
            </div>
        ))
       
        return (
            <div className="feelingsDiv">
                <h2>How are you feeling today?</h2>
                <div className="feelingCardDiv">
                    {userFeelings}
                </div>
                <Footer edit={this.props.user.feelings} route={routes.EDIT_FEELINGS} next="descriptives" />
            </div>

        );
        
    }
}


export default Feelings;