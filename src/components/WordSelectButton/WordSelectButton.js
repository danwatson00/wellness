import React, { Component } from 'react';
import "./WordSelectButton.css";
import { Button } from 'semantic-ui-react';


class WordSelectButton extends Component {

    state = {}

    handleClick = () => this.setState({ active: !this.state.active})

    render() {

        const { active } = this.state

        return (
            <div className="wordSelectBtnDiv">
                <Button key={this.props.item.text} className="wordSelectButton" basic inverted toggle active={active} onClick={this.handleClick}>
                    {this.props.item.text}
                </Button>
            </div>
        );
    }
}

export default WordSelectButton;