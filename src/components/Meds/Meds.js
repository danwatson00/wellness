import React, { Component } from 'react';
import "./Meds.css";
import { Button } from 'reactstrap';
import Footer from '../Footer/Footer';

import * as routes from '../../constants/routes';

class Meds extends Component {

    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        // this.addActivity = this.addActivity.bind(this)

        //sets initial state of feeling
        this.state = {

        }

        this.itemsArray = []
    }

    handleClick = (text, dosage, type) => {
        this.setState({ meds: { text: text, dosage: dosage } }, () => {
            console.log("meds", this.state.meds)
            this.itemsArray.push(this.state.meds)
            console.log("medsArray", this.itemsArray)
        })
    }


    handleSubmit = () => {
        localStorage.setItem('meds', JSON.stringify(this.itemsArray))
    }


    render() {

        const itemsArray = Object.values(this.props.user.meds)
        const userItems = itemsArray.map((item) => (
            <Button key={item.text} onClick={() => this.handleClick(item.text)} className="bigButton" size="lg" outline color="light">{item.text}</Button>
        ))

        return (
            <div className="MedsDiv">
                <h2>Select any Medication you have taken in the last 24 hours.</h2>
                <div className="MedsCardsDiv">
                {userItems}    
                </div>
                <Footer edit={this.props.user.meds} iconSubmitFunc={this.handleSubmit} route={routes.EDIT_MEDS} next="journal" />
            </div>

        );

    }
}


export default Meds;