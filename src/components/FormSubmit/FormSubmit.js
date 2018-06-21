import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react'
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
        answerObj.feeling = localStorage.getItem('feeling')
        // answerObj.activities = localStorage.getItem('activities')
        answerObj.exercise = localStorage.getItem('exercise')
        console.log("exercise", answerObj.exercise)
        // answerObj.foods = localStorage.getItem('foods')
        answerObj.diet = localStorage.getItem('diet')
        answerObj.sleep = localStorage.getItem('sleep')
        // answerObj.meds = localStorage.getItem('meds')
        answerObj.journal = localStorage.getItem('journal')
        console.log("answerObj", answerObj)
        const formObj = JSON.parse(answerObj)
        console.log("formObj", formObj)
        firebase.database().ref(`users/${this.state.user.uid}/entries`).push(answerObj)
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