import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class EditItems extends React.Component {

    state = {}

    EditIconSelect = (item) => {
        return (
            <div key={item.text} className="iconSelectCard ">
                <img src={require(`../IconSelect/icons/${item.icon}.png`)} alt="icon" className="iconSelectIcon"></img>
                <h4 className="editItemH4">{item.text}</h4>
                <Link to={'/editItem'}><Button className="editButton">Edit</Button></Link>
            </div>
        )
    }


    render() {

        const userItems = this.props.edit.map((item) => (

            <div key={item.text} className="iconSelectCard ">
                <img src={require(`../IconSelect/icons/${item.icon}.png`)} alt="icon" className="iconSelectIcon"></img>
                <h4 className="editItemH4">{item.text}</h4>
                <Link to={'/editItem'}><Button className="editButton">Edit</Button></Link>
            </div>

        ))
        return(
            <div className="IconSelectEditDiv">
                {userItems}
            </div>
        
        )
    }
}
