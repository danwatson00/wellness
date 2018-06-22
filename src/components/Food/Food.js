import React, { Component } from 'react';
import './Food.css';
import Footer from '../Footer/Footer';
import * as routes from '../../constants/routes';

class Food extends Component {

    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        // this.addActivity = this.addActivity.bind(this)
        //sets initial state of feeling
        this.state = {

        }

        this.foodsArray = []
    }


    handleClick = (text, icon, type) => {
        this.setState({ foods: { text: text, icon: icon } }, () => {
            console.log("foods", this.state.foods)
            this.foodsArray.push(this.state.foods)
            console.log("foodsArray", this.foodsArray)
        })
    }


    handleSubmit = (arr) => {

        var result = {};
        for (var i = 0; i < arr.length; i++) {
            result[arr[i].key] = arr[i].value;
            return result;
        }
        console.log(result);
        // array.reduce((obj, item) => {
        //     obj[item.id] = item
        //     return obj
        // }, {})
        // const itemObj = arrayToObject(itemArray)
        // console.log(itemObj[idToSelect])
        localStorage.setItem('foods', JSON.stringify(result))
    }

    render() {

        const itemsArray = Object.entries(this.props.user.foods)
        const userItems = itemsArray.map((item) => (
            <div key={item[1].text} onClick={() => this.handleClick(item[1].text, item[1].icon)} className="iconSelectCard">
                <img src={require(`./foodIcons/${item[1].icon}.png`)} alt="icon" className="iconSelectIcon"></img>
                <h3 className="iconSelectH3">{item[1].text}</h3>
            </div>
        ))

        return (
            <div className="FoodDiv">
                <h2>What have you eaten today?</h2>
                {userItems}
                <Footer edit={this.props.user.foods} iconSubmitFunc={this.handleSubmit(this.foodsArray)} route={routes.EDIT_FOOD} next="medications" />
            </div>

        );

    }
}

export default Food;