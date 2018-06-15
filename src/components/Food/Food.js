import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './Food.css';
import Footer from '../Footer/Footer';
import IconSelect from '../IconSelect/IconSelect';

class Food extends Component {

    render() {

        return (
            <div className="FoodDiv">
                <h2>What have you eaten today?</h2>
                <IconSelect items={this.props.user.foods} />
                <Footer next="medications" />
            </div>

        );

    }
}

export default Food;