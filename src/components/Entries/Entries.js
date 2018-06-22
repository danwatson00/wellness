import React, { Component } from 'react'
import "./Entries.css"
// import Footer from '../Footer/Footer'
// import { Button } from 'reactstrap'
// import * as routes from '../../constants/routes'

class Entries extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sleep: ''
        }
    }

    render() {

        // console.log("act props", this.props.user.entries.activities)
        // const actArray = Object.entries(this.props.user.entries.activities)
        const itemsArray = Object.values(this.props.user.entries)
        console.log("this.props.user.entries", this.props.user.entries)
        const userItems = itemsArray.map((item, index) => (
            <div key={item.feeling.icon} className="entriesCard">
                <div className="feelingDiv"><h5 className="feelingH5">Today's feeling</h5><h3>{item.feeling.text}</h3></div>
                <img src={require(`./feelingIcons/${item.feeling.icon}.png`)} alt="feeling emoji" className="entryIcon"></img>
                <div className="exerciseDiv"><p className="introP">Exercise:</p><h5 className="cardH5">{item.exercise.text}</h5></div>
                <div className="dietDiv"><p className="introP">Diet:</p><h5 className="cardH5">{item.diet.text}</h5></div>
                <div className="sleepDiv"><p className="introP">Sleep:</p><h5 className="cardH5">{item.sleep.text}</h5></div>
                <div className="journalDiv"><h5 className="journalP">Journal Entry</h5><p className="cardH5">{item.journal.text}</p></div>

            </div>
        ))

        return (
            <div className="entriesDiv">
                <h4>Past Entries</h4>
                {userItems}
            </div>
        );
    }
}

export default Entries;