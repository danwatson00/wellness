import React, { Component } from 'react';
import "./Exercise.css";
import { Button } from 'reactstrap';
import BigButtonSelect from '../BigButtonSelect/BigButtonSelect';
import Footer from '../Footer/Footer';


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
                <BigButtonSelect items={this.props.user.exercise} />
                <Footer next="sleep" />
            </div>

        );

    }
}

export default Exercise;