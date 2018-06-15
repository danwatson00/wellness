import React from 'react'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './EditItems.css';

export default class EditItems extends React.Component {

    state = { justClicked: null,
                user: this.props.edit }

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

    render() {
        console.log("user", this.state.user)
        console.log("log", (this.props.edit))

        const userItems = this.props.edit.map((item) => {
        
            if (item.icon) {
                return (
                    <div key={item.text} className="iconEditCard">
                        <img src={require(`../IconSelect/icons/${item.icon}.png`)} alt="icon" className="iconSelectIcon"></img>
                        <h4 className="editItemH4">{item.text}</h4>
                        <Button circular inverted color='red' icon>
                            <Icon name='trash' />
                        </Button>
                        <Link className="editBtnLink" to={'/editItem'}><Button circular inverted className="editBtn">Edit</Button></Link>
                    </div>
                )
            } else if (item.dosage) {
                return (
                    <div key={item} className="medsEditCard">
                        <h4 className="editItemH4">{item.brand}</h4> 
                        <h5 className="editItemH5">{item.dosage}</h5>
                        <Link to={'/editItem'}><Button className="editButton">Edit</Button></Link>
                    </div>
                    )
            }else{
                return (
                    <div key={item} className="wordEditCard">
                        <h4 className="wordSelectButtons">{item}</h4>
                        <Link to={'/editItem'}><Button className="editButton">Edit</Button></Link>
                    </div>
                )
            }  
        })

        return (

            <div>
                <h2 className="editItemsIntro" >Edit, add, or delete items</h2>
                {userItems}
                <Button className="addNewBtn" inverted size='huge'>Add New</Button>
            </div>
        )
    }  
}