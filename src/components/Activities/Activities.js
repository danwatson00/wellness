import React, { Component } from 'react';
import './Activities.css';
import Footer from '../Footer/Footer';
import { Button } from 'reactstrap';
import * as routes from '../../constants/routes';

class Activities extends Component {

    constructor(props) {
        super(props)

        this.handleActivities = this.handleActivities.bind(this)
        this.handleClick = this.handleClick.bind(this)

        this.state = {

        }

        this.activitiesArray = []
    }

    handleClick = (text, icon, type) => {
        this.setState({ activities: { text: text, icon: icon } }, () => {
            console.log("activities", this.state.activities)
            this.activitiesArray.push(this.state.activities)
            console.log("activitiesArray", this.activitiesArray)
            
        })
    }


    handleActivities = () => {
        localStorage.setItem('activities', JSON.stringify(this.activitiesArray))
    }

    render() {

        const itemsArray = Object.entries(this.props.user.activities)
        const userItems = itemsArray.map((item) => (
            <div key={item[1].text} onClick={() => this.handleClick(item[1].text, item[1].icon)} className="iconSelectCard ">
                <img src={require(`./icons/${item[1].icon}.png`)} alt="icon" className="iconSelectIcon"></img>
                <h3 className="iconSelectH3">{item[1].text}</h3>
            </div>
        ))

        return (
            <div className="activitiesDiv">
                <h2>What have you been up to today?</h2>
                {userItems}
                <Footer edit={this.props.user.activites} iconSubmitFunc={this.handleActivities} route={routes.EDIT_ACTIVITIES} next="exercise" />
            </div>
        );

    }
}

export default Activities;