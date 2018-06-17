import React, { Component } from 'react';
import './IconSelect.css';

class IconSelect extends Component {



    render() {

        console.log("iconSel props", this.props.items)
        const itemsArray = Object.values(this.props.items)
        console.log("itemsArray", itemsArray)
        const userItems = itemsArray.map((item) => (

            <div key={item.text} className="iconSelectCard ">
                <img src={require(`./icons/${item.icon}.png`)} alt="icon" className="iconSelectIcon"></img>
                <h3 className="">{item.text}</h3>
            </div>

        ))

        return (

            <div className="iconSelectDiv">
                {userItems}
            </div>

        );

    }
}

export default IconSelect;