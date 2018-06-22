import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import * as firebase from 'firebase'

class FormSubmit extends Component {
    
    constructor(props) {
        super(props)

        this.formSubmit = this.formSubmit.bind(this)
        // this.handleClick = this.handleClick.bind(this)

        //sets initial state of feeling
        this.state = {

        }
    }


    formSubmit = () => {
        let answerObj = {}
        answerObj.feeling = JSON.parse(localStorage.getItem('feeling'))
        console.log("parsed feeling", answerObj.feeling)
        answerObj.activities = localStorage.getItem('activities')
        answerObj.exercise = JSON.parse(localStorage.getItem('exercise'))
        console.log("exercise", answerObj.exercise)
        answerObj.foods = localStorage.getItem('foods')
        answerObj.diet = JSON.parse(localStorage.getItem('diet'))
        answerObj.sleep = JSON.parse(localStorage.getItem('sleep'))
        answerObj.meds = localStorage.getItem('meds')
        answerObj.journal = JSON.parse(localStorage.getItem('journal'))
        console.log("answerObj", answerObj)
        // const formObj = JSON.parse(answerObj)
        // console.log("formObj", formObj)
        firebase.database().ref(`users/${this.props.user.uid}/entries`).push(answerObj)
        firebase.database().ref(`users/${this.props.uid}`).on('value', snap => {
            console.log("submitForm snap", snap.val())
            let theUser = { ...this.props.user }
            theUser = snap.val()
            console.log("theUser", theUser)
            this.setState({
                user: theUser
            }
            )
            localStorage.setItem('user', JSON.stringify(theUser))
        })
    }


    render() {

        return (

            <div>
                <h2>Congratulations! You completed an entry!</h2><h3>Click on the button below to save your entry.</h3>
                <Button className="btn-lg" outline color="light" onClick={this.formSubmit}>Submit Entry</Button>
            </div>
        )
    }
}

export default FormSubmit;