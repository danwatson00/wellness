import React, { Component } from 'react';
import "./BigButtonSelect.css";
import { Button } from 'reactstrap';


class BigButtonSelect extends Component {

    render() {

        console.log("wordSel props", this.props.items)
        const itemsArray = Object.values(this.props.items)
        const userItems = itemsArray.map((item) => (

            <Button key={item.text} className="bigButton" size="lg" outline color="light">{item.text}</Button>
        ))

        return (

            <div className="bigButtonCardsDiv">
                {userItems}
            </div>

        );
    }
}

export default BigButtonSelect;