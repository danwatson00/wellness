import React, { Component } from 'react';
import './IconSelect.css';

class IconSelect extends Component {

    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)

        //sets initial state of feeling
        this.state = {
            [this.props.type]: {}
        }
    }

    

    handleSubmit = (type, text, icon) => {
        this.setState({ [type]:{ text: text, icon: icon } }, () => {
            let userAnswer = this.state
            console.log("log", userAnswer)
            this.props.buildFormObj(userAnswer)
        })
    }

    handleClick = () => {

    }

    render() {

        const itemsArray = Object.entries(this.props.items)
        const userItems = itemsArray.map((item) => (
            <div key={item[1].text} onClick={() => this.handleActivitiesSubmit(this.props.type, item[1].text, item[1].icon)} className="iconSelectCard ">
                <img src={require(`./icons/${item[1].icon}.png`)} alt="icon" className="iconSelectIcon"></img>
                <h3 className="iconSelectH3">{item[1].text}</h3>
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