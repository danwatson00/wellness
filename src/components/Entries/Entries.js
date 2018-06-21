import React, { Component } from 'react'
import "./Entries.css"
import Footer from '../Footer/Footer'
import { Button } from 'reactstrap'
import * as routes from '../../constants/routes'

class Entries extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sleep: ''
        }
    }

    render() {

        const itemsArray = Object.values(this.props.user.entries)
        console.log("this.props.user.entries", this.props.user.entries)
        const userItems = itemsArray.map((item) => (
            <div className="entriesCard">
                <h3>Feeling: {item.feeling.text}</h3>
                {/*<img src={require(`./feelingIcons/${feeling[1].icon}.png`)} alt="feeling emoji" className="feelingIcon"></img> */}
                <p className="p-lite">Exercise:</p><strong>{item.diet.exercise}</strong>
                <p className="p-lite">Diet:</p><strong>{item.diet.text}</strong>
                <p className="p-lite">Sleep:</p><strong>{item.diet.sleep}</strong>
                <p className="p-lite">Journal:</p><strong>{item.diet.journal}</strong>
            </div>
        ))

        return (
            <div className="sleepDiv">
                <h4>Past Entries</h4>
                {userItems}
            </div>
        );
    }
}

export default Entries;