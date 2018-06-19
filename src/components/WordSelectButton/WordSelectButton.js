import React, { Component } from 'react';
import "./WordSelectButton.css";
import { Button } from 'semantic-ui-react';


class WordSelectButton extends Component {

    state = {}

    handleClick = () => this.setState({ active: !this.state.active})

    render() {

        const { active } = this.state

        return (
            <option className="wordSelectBtnDiv">
                <Button key={this.props.item.text} className="wordSelectButton" basic inverted toggle active={active} onClick={this.handleClick}>
                    {this.props.item.text}
                </Button>
            </option>
        );
    }
}

export default WordSelectButton;