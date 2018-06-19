import React from 'react'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './EditItems.css';
import { rebase } from '../Base/Base.js';
import * as firebase from 'firebase';

import * as routes from '../../constants/routes';

export default class EditItems extends React.Component {

    constructor(props) {
        super(props)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
     

        this.state = { justClicked: null,
                    user: this.props.edit }
    }

    handleRemove(objKey) {
        console.log("delete clicked", objKey)
        firebase.database().ref(`users/${this.props.uid}/${this.props.type}/${objKey}`).remove()
        // rebase.initializedApp.database().ref('users').child(`${this.props.uid}/${this.props.type}/${objKey}`).remove(objKey)
    }

    handleEdit(objKey, editedObj) {
        console.log("edit clicked", objKey)
        firebase.database().ref(`users/${this.props.uid}/${this.props.type}/${objKey}`).update(editedObj)
    }

    // editIconItem() {
    //     console.log("put an awesome function here")
    // }

    render() {

        console.log("edit props", this.props.edit)
        const itemsArray = Object.entries(this.props.edit)
        console.log("itemsArray", itemsArray)
        const userItems = itemsArray.map((item) => {
            
            console.log("item key", item[0])
            if (item[1].icon) { //if it has an icon it will use this return
                // const id = Object.keys(userItems).filter(item => Object.keys[item] === id);
               
                return (
                    <div key={item[0]} id={item[0]} className="iconEditCard">
                        <img id={"img" + item[1].text} src={require(`../IconSelect/icons/${item[1].icon}.png`)} alt="icon" className="iconSelectIcon"></img>
                        <h4 id={"h4" + item[1].text}className="editItemH4">{item[1].text}</h4>
                        <Button key={item[1].text} onClick={() =>this.handleRemove(item[0])} circular inverted color='red' icon>
                            <Icon name='trash' />
                        </Button>
                        <Link className="editBtnLink" to={'/editItem'}><Button circular inverted className="editBtn">Edit</Button></Link>
                    </div>
                )
            } else if (item[1].dosage) { //only meds have dosage, so it will use this return
                return (
                    <div key={item[0]} id={item[0]} className="medsEditCard">
                        <h4 className="editItemH4">{item[1].brand}</h4> 
                        <h5 className="editItemH5">{item[1].dosage}</h5>
                        <Button key={item[1].text} onClick={() => this.handleRemove(item[0])} circular inverted color='red' icon>
                            <Icon name='trash' />
                        </Button>
                        <Link className="editBtnLink" to={'/editItem'}><Button circular inverted className="editBtn">Edit</Button></Link>
                    </div>
                    )
            }else{ 
                return (
                    <div key={item[0]} id={item[0]} className="wordEditCard">
                        <h4 className="wordSelectButtons">{item[1].text}</h4>
                        <Button key={item[1].text} onClick={() => this.handleRemove(item[0])} circular inverted color='red' icon>
                            <Icon name='trash' />
                        </Button>
                        <Link className="editBtnLink" to={'/editItem'}><Button circular inverted className="editBtn">Edit</Button></Link>
                    </div>
                )
            }  
        })

        return (

            <div className="editItemsDiv">
                <h2 className="editItemsIntro" >Edit, add, or delete items</h2>
                {userItems}
                <Link to={`/${this.props.type}/add`}><Button className="addNewBtn" inverted size='huge'>Add New</Button></Link>
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