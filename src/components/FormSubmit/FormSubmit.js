import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react'

class FormSubmit extends Component {
    
    constructor(props) {
        super(props)

        this.onFormSubmit = this.onFormSubmit.bind(this)
        // this.handleClick = this.handleClick.bind(this)

        //sets initial state of feeling
        this.state = {

        }
    }


    onFormSubmit = () => {
        let answerObj = {}
        answerObj.feeling = localStorage.getItem('feeling')
        // answerObj.activities = localStorage.getItem('activities')
        answerObj.exercise = localStorage.getItem('exercise')
        // answerObj.foods = localStorage.getItem('foods')
        answerObj.diet = localStorage.getItem('diet')
        answerObj.sleep = localStorage.getItem('sleep')
        // answerObj.meds = localStorage.getItem('meds')
        // answerObj.journal = localStorage.getItem('journal')
        console.log("answerObj", answerObj)
        const goodAnswerObj = JSON.parse(answerObj)
        console.log("goodAnswerObj", goodAnswerObj)
    }

    onFormSubmit()

}

export default FormSubmit;