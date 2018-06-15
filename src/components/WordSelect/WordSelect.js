import React, { Component } from 'react';
import "./WordSelect.css";
import WordSelectButton from '../WordSelectButton/WordSelectButton';


class WordSelect extends Component {


    render() {

        const itemsObj = this.props.items.map((item) => (
            <WordSelectButton item={item} />
        ))

        


        return (
            <div className="wordSelectDiv">
                <div className="wordSelectCardsDiv">
                    {itemsObj} 
                </div>
            </div>
        );
    }
}

export default WordSelect;