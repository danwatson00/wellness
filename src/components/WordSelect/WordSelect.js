import React, { Component } from 'react';
import "./WordSelect.css";
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


class WordSelect extends Component {

    state = {}

    handleClick = () => this.setState({ active: !this.state.active })

    render() {

        const { active } = this.state

        const itemsObj = this.props.items.map((item) => (
            
            <Button key={item} className="wordSelectButtons" toggle active={active} onClick={this.handleClick}>
                {item}
            </Button>
        ))

        return (
            <div className="wordSelectDiv">
                <p>{this.props.intro}</p>
                <div className="wordSelectCardsDiv">
                    {itemsObj}
                </div>
            </div>
        );
    }
}

export default WordSelect;