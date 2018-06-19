import React, { Component } from 'react';
import './IconSelect.css';

class IconSelect extends Component {

    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)

        //sets initial state of feeling
        this.state = {
            stuff: {}
        }
    }

    handleSubmit = (text, level, icon) => {
        const currentObj = localStorage.getItem(`${this.props.type}`)
        const userObj = JSON.parse(currentObj)
        this.setState({ feeling: { text: text, level: level, icon: icon } })
        let answerObj = {
            feeling: this.state.feeling
        }
        console.log("answerObj", answerObj)
        localStorage.setItem('answerObj', answerObj);

        // console.log("clickity", this.state.entry.feeling)
    }

    render() {

        const itemsArray = Object.values(this.props.items)
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