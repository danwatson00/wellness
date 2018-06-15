import React, { Component } from 'react';
import './IconSelect.css';

class IconSelect extends Component {



    render() {

        const userItems = this.props.items.map((item) => (

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