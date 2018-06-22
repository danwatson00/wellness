import React, { Component } from 'react'
import "./Sleep.css"
import Footer from '../Footer/Footer'
import { Button } from 'reactstrap'
import * as routes from '../../constants/routes'

class Sleep extends Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)

        this.state = {
            sleep: ''
        }
    }

    handleClick = (text) => {
        this.setState({ sleep: { text: text} }, () => {
            let obj = this.state.sleep
            localStorage.setItem('sleep', JSON.stringify(obj))
        })
    }

    render() {

        const itemsArray = Object.values(this.props.user.sleep)
        const userItems = itemsArray.map((item) => (
            <Button key={item.text} onClick={() => this.handleClick(item.text)} className="bigButton" size="lg" outline color="light">{item.text}</Button>
        ))

        return (
            <div className="sleepDiv">
                <h4>In the last 24 hours...</h4>
                <h4>How much have you slept?</h4>
                {userItems}
                <Footer edit={this.props.user.sleep} route={routes.EDIT_SLEEP} next="diet" />
            </div>
        );
    }
}

export default Sleep;