import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import "./Feelings.css";

import * as routes from '../../constants/routes';

class Feelings extends Component {

    constructor(props) {
        super(props)

        //sets initial state of feeling
        this.state = {
            mood: {
                feeling:''
            }
        }

        this.fixedArr = this.fixedArr.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (key) => {

        console.log("click click")
        this.setState = {
            mood: {
                feeling: key
            }
        }
    }

    fixedArr = (badArray) => {
    console.log("badArray in for loop", badArray)
        for (let item = 0; item < badArray.length; item++) {
            console.log("for loop", item)
            const obj = item[1]
            obj.key = item[0]
            console.log("for loop obj", obj)
            let fixedArr = []
            fixedArr.push(obj)
            console.log("fixedArr", fixedArr)
            return fixedArr
        }
    }


    handleSubmit = () => {
        this.setState({ entry: {feeling:'test'} })
        // console.log("clickity", this.state.entry.feeling)
    }

    render() {
        // let fixedArray = badArray.forEach(function(item)  {
            
        //     console.log("forEach item", item)
        //     const obj = item[1]
        //     console.log("obj", obj)
        //     obj.key = item[0]
        //     console.log("obj after key", obj)
        //     fixedArray.push(obj)
        //     console.log("fixedArray", fixedArray)
        //     return fixedArray
        // })

        


        // const finishedArray = concat(Object.entries(this.props.user.feelings)).map(item => {
        //     console.log("map item", item)
        //     let newObj = {}
        //     let fixedArray = []
        //     newObj = item[1]
        //     newObj.key = item[0]
        //     console.log("map newObj", newObj)
        //     // fixedArray.push(newObj)
        //     let result = fixedArray.concat(Object.assign(newObj))
        //     return result
        //     // console.log("fullArray", fullArray)
        // })
        console.log("props", this.props.user.feelings)

        let arr = Object.entries(this.props.user.feelings)
        console.log("arr", arr)

        for(let key in this.props.user.feelings) {
            console.log("let key", key, this.props.user.feelings[key])
        }

        const userFeelings = arr.map((feeling) => (
           
            <div id={feeling[0]} key={feeling[0]} onClick={this.handleClick} className="feelingCard">
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
                <Footer edit={this.props.user.feelings} route={routes.EDIT_FEELINGS} next="activities" />
            </div>

        );

    }
}


export default Feelings;