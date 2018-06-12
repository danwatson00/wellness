import React, { Component } from 'react';
import "./FeelingsCard.css";
import { Link } from 'react-router-dom';
import { mehIcon, sadIcon } from '../../constants/images';
import happyIcon from '../../img/icons/white/happiness.png';

class FeelingsCard extends Component {

    render() {
        console.log("happyIcon", happyIcon)
        const userFeelings = this.props.user.feelings.map((feeling) => (
            <Link to={`/descriptives`} className="descriptivesLink">
                <div key={"feeling-key-" + feeling.level} className="feelingCard">
                    <img src={feeling.icon} alt="feeling emoji" className="feelingIcon"></img>
                    <h3>{feeling.text}</h3>
                </div>
            </Link>
        ))

        return (
            <div className="feelingCardDiv">
                {userFeelings}
            </div>
        )
    }
}

export default FeelingsCard;