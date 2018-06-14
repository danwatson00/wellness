import React, { Component } from 'react';
import "./Exercise.css";
import { Link } from 'react-router-dom';
// import Activities from '../Activities/Activities';
import { Button } from 'reactstrap';


import * as routes from '../../constants/routes';

class Exercise extends Component {



    render() {

        const userExercise = this.props.user.exercise.map((ex) => (

            <Button key={ex} className="exButtons" size="lg" outline color="light">{ex}</Button>
        ))

        return (
            <div className="exerciseDiv">
                <h3>In the last 24 hours...</h3>
                <h3>How physically active have you been?</h3>
                <div className="ExerciseCardsDiv">
                    {userExercise}
                </div>
                <Link to={`/activities`} className="backLink float-left">Back</Link>
                <Link to={`/sleep`}><Button className="exSubmitBtn float-right">Next</Button></Link>

            </div>

        );

    }
}


export default Exercise;