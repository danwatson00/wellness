import React, { Component } from 'react'
import './Exercise.css'
import Footer from '../Footer/Footer'
import { Button } from 'reactstrap'

import * as routes from '../../constants/routes'

class Exercise extends Component {

    constructor(props) {
        super(props)

        // this.handleClick = this.handleClick.bind(this)

        //sets initial state of exercise
        this.state = {
            exercise: ''
        }
    }

    handleClick = (text) => {
        this.setState({ exercise: { text: text } }, () => {
            let obj = this.state.exercise
            localStorage.setItem('exercise', JSON.stringify(obj))
        })
    }

    render() {

        const itemsArray = Object.values(this.props.user.exercise)
        const userItems = itemsArray.map((item) => (
            <Button key={item.text} onClick={() => this.handleClick(item.text)}  className="bigButton" size="lg" outline color="light">{item.text}</Button>
        ))

        return (
            <div className="exerciseDiv">
                <h3>In the last 24 hours...</h3>
                <h3>How physically active have you been?</h3>
                {userItems}
                <Footer edit={this.props.user.exercise} type='exercise' answer={this.state.exercise} route={routes.EDIT_EXERCISE} next="sleep" />
            </div>

        );

    }
}

export default Exercise;