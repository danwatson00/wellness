import React, { Component } from 'react';
import "./WordSelect.css";
import WordSelectButton from '../WordSelectButton/WordSelectButton';
import { Input } from 'reactstrap';


class WordSelect extends Component {


    render() {

        console.log("wordSel props", this.props.items)
        const itemsArray = Object.values(this.props.items)
        console.log("itemsArray", itemsArray)
        const itemCards = itemsArray.map((item) => (
            
            <WordSelectButton item={item} />
        ))

        


        return (
            <div className="wordSelectDiv">
                <Input className="wordSelectCardsDiv" type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                  {itemCards} 
                </Input>
            </div>
        );
    }
}

export default WordSelect;