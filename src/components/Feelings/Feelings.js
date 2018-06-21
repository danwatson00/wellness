import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import "./Feelings.css";

import * as routes from '../../constants/routes';

class Feelings extends Component {

    constructor(props) {
        super(props)

        //sets initial state of feeling
        this.state = {
            feeling:{}
        }
        // this.fixedArr = this.fixedArr.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.showMe = this.showMe.bind(this)

    }

    showMe = () => {
        console.log("this state", this.state)
    }


    handleSubmit = (text, level, icon) => {
        this.setState({ feeling: { text: text, level: level, icon: icon }}, () => {
            console.log("da", this.state)
            let obj = this.state.feeling
            localStorage.setItem('feelings', JSON.stringify(obj))
        })
    }
    

    render() {
        
        let arr = Object.entries(this.props.user.feelings)
        console.log("arr", arr)

        const userFeelings = arr.map((feeling) => (
        
            <div id={feeling[0]} key={feeling[0]} onClick={() => this.handleSubmit(feeling[1].text, feeling[1].level, feeling[1].icon)} className="feelingCard">
                <img src={require(`./feelingIcons/${feeling[1].icon}.png`)} alt="feeling emoji" className="feelingIcon"></img>
                <h3>{feeling[1].text}</h3>
            </div>
        ))

        return (
            <div className="feelingsDiv">
                <h2>How are you feeling today?</h2>
                <div className="feelingCardDiv">
                    {userFeelings}
                </div>
                <Footer edit={this.props.user.feelings} hideSaveBtn='true' route={routes.EDIT_FEELINGS} answers={this.state.feelings} next="activities" />
            </div>
        )
    }
}


export default Feelings;