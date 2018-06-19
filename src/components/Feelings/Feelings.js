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

    }
    // fixedArr = (badArray) => {
    // console.log("badArray in for loop", badArray)
    //     for (let item = 0; item < badArray.length; item++) {
    //         console.log("for loop", item)
    //         const obj = item[1]
    //         obj.key = item[0]
    //         console.log("for loop obj", obj)
    //         let fixedArr = []
    //         fixedArr.push(obj)
    //         console.log("fixedArr", fixedArr)
    //         return fixedArr
    //     }
    // }

    handleSubmit = (text, level, icon) => {
        this.setState({ feelings: { text: text, level: level, icon: icon } })
        let answerObj = {
            feeling: this.state.feeling
        }
        console.log("answerObj", answerObj)
        localStorage.setItem('answerObj', answerObj);
        
        // console.log("clickity", this.state.entry.feeling)
    }

    render() {
        
        let arr = Object.entries(this.props.user.feelings)
        console.log("arr", arr)

        // for(let key in this.props.user.feelings) {
        //     console.log("let key", key, this.props.user.feelings[key])
        // }

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
                <Footer edit={this.props.user.feelings} route={routes.EDIT_FEELINGS} answers={this.state.feelings} next="activities" />
            </div>

        );

    }
}


export default Feelings;