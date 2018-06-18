import React from 'react'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './EditItems.css';
import { rebase } from '../Base/Base.js';
import * as firebase from 'firebase';

export default class EditItems extends React.Component {

    constructor(props) {
        super(props)
        this.handleRemove = this.handleRemove.bind(this)

        this.state = { justClicked: null,
                    user: this.props.edit }
    }

    handleRemove(id) {
        console.log("delete clicked", id)
        console.log("url", rebase.initializedApp.database().ref('users').child(`${this.props.uid}/${this.props.type}/${id}`))
        return rebase.initializedApp.database().ref('users').child(`${this.props.uid}/${this.props.type}/${id}`).remove()
    }

    render() {

        console.log("edit props", this.props.edit)
        const itemsArray = Object.values(this.props.edit)
        const userItems = itemsArray.map((item) => {
            
            console.log("item1", item)
            if (item.icon) { //if it has an icon it will use this return
                // const id = Object.keys(userItems).filter(item => Object.keys[item] === id);
               
                return (
                    <div id={"div" + item.text} className="iconEditCard">
                        <img id={"img" + item.text} src={require(`../IconSelect/icons/${item.icon}.png`)} alt="icon" className="iconSelectIcon"></img>
                        <h4 id={"h4" + item.text}className="editItemH4">{item.text}</h4>
                        <Button key={item.text} onClick={() =>this.handleRemove(item)} circular inverted color='red' icon>
                            <Icon name='trash' />
                        </Button>
                        <Link className="editBtnLink" to={'/editItem'}><Button circular inverted className="editBtn">Edit</Button></Link>
                    </div>
                )
            } else if (item.dosage) { //only meds have dosage, so it will use this return
                return (
                    <div key={this.id} className="medsEditCard">
                        <h4 className="editItemH4">{item.brand}</h4> 
                        <h5 className="editItemH5">{item.dosage}</h5>
                        <Link to={'/editItem'}><Button className="editButton">Edit</Button></Link>
                    </div>
                    )
            }else{ 
                return (
                    <div key={item.key} className="wordEditCard">
                        <h4 className="wordSelectButtons">{item}</h4>
                        <Link to={'/editItem'}><Button className="editButton">Edit</Button></Link>
                    </div>
                )
            }  
        })

        return (

            <div className="editItemsDiv">
                <h2 className="editItemsIntro" >Edit, add, or delete items</h2>
                {userItems}
                <Button className="addNewBtn" inverted size='huge'>Add New</Button>
            </div>
        )
    }  
}

 // EditIconSelect = (item) => {
    //     return (
    //         <div key={item.text} className="iconSelectCard ">
    //             <img src={require(`../IconSelect/icons/${item.icon}.png`)} alt="icon" className="editIcon"></img>
    //             <h4 className="editItemH4">{item.text}</h4>
    //             <Link to={'/editItem'}><Button className="editButton">Edit</Button></Link>
    //         </div>
    //     )
    // }

    // EditMedsSelect = (item) => {
    //     return (
    //         <div key={item} className="editItemsCard">
    //             <h4 className="editItemH4">{item.brand}</h4>
    //             <h5 className="editItemH5">{item.dosage}</h5>
    //             <Link to={'/editItem'}><Button className="editButton">Edit</Button></Link>
    //         </div>
    //     )
    // }

    // EditWordSelect = (item) => {
    //     <div key={item} className="editItemsCard">
    //         <h4 className="wordSelectButtons">{item}</h4>
    //         <Link to={'/editItem'}><Button className="editButton">Edit</Button></Link>
    //     </div>
    // }

    // EditFeelingsSelect = (item) => {
    //     <div key={item.text} className="iconSelectCard ">
    //         <img src={require(`../IconSelect/icons/${item.icon}.png`)} alt="icon" className="iconSelectIcon"></img>
    //         <h4 className="editItemH4">{item.text}</h4>
    //         <Link to={'/editItem'}><Button className="editButton">Edit</Button></Link>
    //     </div>
    // }