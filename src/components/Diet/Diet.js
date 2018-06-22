import React, { Component } from 'react';
import "./Diet.css";
import { Button } from 'reactstrap'
import Footer from '../Footer/Footer';

import * as routes from '../../constants/routes';
class Diet extends Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)

        this.state = {
            diet: ''
        }
    }

    handleClick = (text) => {
        this.setState({ diet: { text: text } }, () => {
            let obj = this.state.diet
            localStorage.setItem('diet', JSON.stringify(obj))
        })
    }


    render() {

        const itemsArray = Object.values(this.props.user.diet)
        const userItems = itemsArray.map((item) => (
            <Button key={item.text} onClick={() => this.handleClick(item.text)} className="bigButton" size="lg" outline color="light">{item.text}</Button>
        ))

        return (
            <div className="DietDiv">
                <h3>In the last 24 hours...</h3>
                <h3>How healthy have your eating habits been?</h3>
                {userItems}
                <Footer edit={this.props.user.diet} route={routes.EDIT_DIET} next="food" />
            </div>

        );

    }
}


export default Diet;