import React from 'react'
// import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './EditItems.css';
// import { rebase } from '../Base/Base.js';
import * as firebase from 'firebase';

// import * as routes from '../../constants/routes';

export default class EditItems extends React.Component {

    constructor(props) {
        super(props)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        // this.watchState = this.watchState.bind(this)
     

        this.state = { justClicked: null,
                    user: this.props.user }
    }

    handleRemove(objKey) {
        console.log("delete clicked", objKey)
        firebase.database().ref(`users/${this.props.uid}/${this.props.type}/${objKey}`).remove()
        // const userRef = firebase.database().ref().child(`${this.props.uid}`)
        // console.log("editItems userRef", userRef)
        // const categoryRef = userRef.child(`${this.props.type}`)
        // console.log("editItems categoryRef", categoryRef)
        firebase.database().ref(`users/${this.props.uid}`).on('value', snap => {
            console.log("editItems snap", snap.val())
            let someUser = {...this.props.user}
            someUser = snap.val()
            this.setState({
                user: someUser
            }
            )
            localStorage.setItem('user', JSON.stringify(this.state.user))
        })
    }

    handleEdit(objKey, editedObj) {
        console.log("edit clicked", objKey)
        firebase.database().ref(`users/${this.props.uid}/${this.props.type}/${objKey}`).update(editedObj)
    }

    // editIconItem() {
    //     console.log("put an awesome function here")
    // }

    // watchState = () => {
    //     console.log("kkey", this.props.uid)
    //     const userRef = firebase.database().ref().child(`${this.props.uid}`)
    //     console.log("userRef", userRef)
    //     const feelingsRef = userRef.child('feelings')
    //     console.log("activitiesRef", feelingsRef)
    //     feelingsRef.on('value', snap => {
    //         console.log("snap", snap.val())
    //         this.setState({
    //             dan: "test",
    //             user: snap.val()
    //         })
    //     })
    // }
   

    render() {

        let cat = this.props.type
        console.log("cat", this.props.type)
        console.log("state cat", this.state.user[cat])
        const itemsArray = Object.entries(this.state.user[cat])
        const userItems = itemsArray.map((item) => {
            
            console.log("item icon", item[1].icon)
            if (this.props.group === 'icon') { //if it has an icon it will use this return
        
                return (
                    <div key={item[0]} id={item[0]} className="iconEditCard">
                        <img id={"img" + item[1].text} className="iconSelectIconDiv" src={require(`../IconSelect/icons/${item[1].icon}.png`)} alt="icon"></img>
                        <h4 id={"h4" + item[1].text}className="editItemH4">{item[1].text}</h4>
                        <Button key={item[1].text} onClick={() =>this.handleRemove(item[0])} circular inverted color='red' icon>
                            <Icon name='trash' />
                        </Button>
                        <Link className="editBtnLink" to={`/${this.props.type}/edit/item`}><Button circular inverted className="editBtn">Edit</Button></Link>
                    </div>
                )
            // } else if (this.props.group === 'meds') { //only meds have dosage, so it will use this return
            //     return (
            //         <div key={item[0]} id={item[0]} className="medsEditCard">
            //             <h4 className="editItemH4">{item[1].brand}</h4> 
            //             <h5 className="editItemH5">{item[1].dosage}</h5>
            //             <Button key={item[1].text} onClick={() => this.handleRemove(item[0])} circular inverted color='red' icon>
            //                 <Icon name='trash' />
            //             </Button>
            //             <Link className="editBtnLink" to={`/${this.props.type}/edit/item`}><Button circular inverted className="editBtn">Edit</Button></Link>
            //         </div>
            //         )
            }else{ 
                return (
                    <div key={item[0]} id={item[0]} className="wordEditCard">
                        <h4 className="wordSelectButtons">{item[1].text}</h4>
                        <Button key={item[1].text} onClick={() => this.handleRemove(item[0])} circular inverted color='red' icon>
                            <Icon name='trash' />
                        </Button>
                        <Link className="editBtnLink" to={`/${this.props.type}/edit/item`}><Button circular inverted className="editBtn">Edit</Button></Link>
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