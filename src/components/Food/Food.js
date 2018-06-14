import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './Food.css';


import * as routes from '../../constants/routes';

class Food extends Component {



    render() {

        console.log("foods", this.props.user.foods)
        const userFood = this.props.user.foods.map((food) => (

            <div key={food.text} className="foodCard">
                <img src={require(`./foodIcons/${food.icon}.png`)} alt="Food emoji" className="foodIcon"></img>
                <h3 className="foodH3">{food.text}</h3>
            </div>

        ))

        return (
            <div className="FoodDiv">
                <h2>What have you eaten today?</h2>
                <div className="FoodCardDiv">
                    {userFood}
                </div>
                <Link to={`/diet`} className="backLink float-left">Back</Link>
                <Link to={`/medications`}><Button className="actSubmitBtn float-right">Next</Button></Link>

            </div>

        );

    }
}

export default Food;