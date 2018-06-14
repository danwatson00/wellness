import React, { Component } from 'react';
import "./Diet.css";
import { Link } from 'react-router-dom';
// import Activities from '../Activities/Activities';
import { Button } from 'reactstrap';


import * as routes from '../../constants/routes';

class Diet extends Component {



    render() {

        const userDiet = this.props.user.diet.map((ex) => (

            <Button key={ex.text} className="exButtons" size="lg" outline color="light">{ex}</Button>
        ))

        return (
            <div className="DietDiv">
                <h3>In the last 24 hours...</h3>
                <h3>How healthy have your eating habits been?</h3>
                <div className="DietCardsDiv">
                    {userDiet}
                </div>
                <Link to={`/sleep`} className="backLink float-left">Back</Link>
                <Link to={`/food`}><Button className="dietSubmitBtn float-right">Next</Button></Link>

            </div>

        );

    }
}


export default Diet;