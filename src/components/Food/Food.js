import React, { Component } from 'react';
import './Food.css';
import Footer from '../Footer/Footer';
import IconSelect from '../IconSelect/IconSelect';

import * as routes from '../../constants/routes';

class Food extends Component {

    render() {

        return (
            <div className="FoodDiv">
                <h2>What have you eaten today?</h2>
                <IconSelect items={this.props.user.foods} />
                <Footer edit={this.props.user.foods} route={routes.EDIT_FOOD} next="medications" />
            </div>

        );

    }
}

export default Food;