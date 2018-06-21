import React, { Component } from 'react';
import './Activities.css';
import Footer from '../Footer/Footer';

import * as routes from '../../constants/routes';

class Activities extends Component {

    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)

        //sets initial state of feeling
        this.state = {

        }
    }

    handleClick = (event, type, text, icon) => {
        this.setState({ activities: { text: text, icon: icon } }, () => {
            console.log("activities", this.state.activities)
            const selections = Object.assign({}, this.state.selections)
            console.log("event", selections)
            // selections[[type].target.id]
            this.setState({selections }, () => {
                console.log("da state", this.state)
            })
        })
    }


    handleSubmit = (text, icon) => {
        this.setState({ activities: { text: text, icon: icon } }, () => {
            let userAnswer = this.state.selections
            console.log("log", userAnswer)
            this.props.buildFormObj(userAnswer)
        })
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
                <Footer route='/activities/edit' edit={this.props.user.activites} route={routes.EDIT_ACTIVITIES} next="exercise" />
            </div>
        );

    }
}

export default Activities;