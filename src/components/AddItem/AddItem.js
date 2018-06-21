import React from 'react'
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as image from '../../constants/images';
import * as firebase from 'firebase';

export default class AddItem extends React.Component {

    constructor(props) {
        super(props)

        //sets initial state of authed, loading, user

        this.state = {
            level: "",
            text: "",
    
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleIconSubmit = this.handleIconSubmit.bind(this)
        this.handleMedsSubmit = this.handleMedsSubmit.bind(this)
        this.handleWordSubmit = this.handleWordSubmit.bind(this)
        
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    handleIconSubmit(e) {
        e.preventDefault();
        // itemRef = firebase.database().ref(`users/${this.props.uid}/${this.props.type}`).push(item)
        const itemRef = firebase.database().ref(`users/${this.props.uid}/${this.props.type}`);
        let item = {
                text: this.state.text,
                level: this.state.level,
                icon: this.state.radio1
        }

        itemRef.push(item);

        this.setState({
            text: '',
            level: '',
            radio1: ''
        })

        firebase.database().ref(`users/${this.props.uid}`).on('value', snap => {
            console.log("editItems snap", snap.val())
            let theUser = { ...this.props.user }
            theUser = snap.val()
            console.log("theUser", theUser)
            this.setState({
                user: theUser
            }
            )
            localStorage.setItem('user', JSON.stringify(theUser))
        })
    }

    handleMedsSubmit(e) {
        e.preventDefault();
        // itemRef = firebase.database().ref(`users/${this.props.uid}/${this.props.type}`).push(item)
        const itemRef = firebase.database().ref(`users/${this.props.uid}/${this.props.type}`);
        let item = {
            text: this.state.text,
            dosage: this.state.level,
        }

        itemRef.push(item)
        this.setState({
            text: '',
            dosage: ''
        })
        firebase.database().ref(`users/${this.props.uid}`).on('value', snap => {
            console.log("initial user", localStorage.getItem('user'))
            console.log("editItems snap", snap.val())
            let theUser = { ...this.props.user }
            theUser = snap.val()
            this.setState({
                user: theUser
            }
            )
            localStorage.setItem('user', JSON.stringify(this.state.user))
        })
    }

    handleWordSubmit(e) {
        e.preventDefault();
        // itemRef = firebase.database().ref(`users/${this.props.uid}/${this.props.type}`).push(item)
        const itemRef = firebase.database().ref(`users/${this.props.uid}/${this.props.type}`);
        let item = {
            text: this.state.text,
            level: this.state.level,
        }

        itemRef.push(item)
        this.setState({
            text: '',
            dosage: ''
        })
        firebase.database().ref(`users/${this.props.uid}`).on('value', snap => {
            console.log("addItem snap", snap.val())
            let theUser = { ...this.props.user }
            theUser = snap.val()
            this.setState({
                user: theUser
            }
            )
            localStorage.setItem('user', JSON.stringify(this.state.user))
        })
    }

    render() {

        const HAPPY = 'happiness';
        const MEH = '013-meh';
        const SAD = '009-sad-1';
        const BARBEQUE = '001-barbecue-12';
        const TACO = '001-taco';
        const TOMATO = '001-tomato';
        const YAWN = '001-yawn';
        const MEDICINE = '002-medicine-1';
        const ANGRY = '024-sad';
        const FISHING = 'fishing-man';
        const HIKING = 'hiking.png';
        const HORSEBACK = 'horse-riding';
        const CANOEING = 'man-in-canoe';
        const SWIMMING = 'man-swimming';
        const RICE = 'rice';
        const SALAD = 'salad';
        const SPAGHETTI = 'spaguetti';
        const SICK = '015-ill'
        const SURPRISED = '005-surprise'
        const TIRED = '001-yawn'
        const CRYING = '019-crying'
        const EXTATIC = '016-happy-2'
        const DEPRESSED = '008-sad-2'
        const CHIPS = '039-chips'
        const COOKIES = '037-cookies'
        const AVACADO = '027-avacado'
        const ICE_CREAM = '024-ice-cream'
        const SANDWICH = '013-sandwich'
        const PANCAKES = '018-pancakes'



        if(this.props.group === 'icon') {
            return (
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Item Text</Label>
                        <Input type="text" name="text" id="editItemText" placeholder="Enter text here" onChange={this.handleChange} value={this.state.text} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="levelSelect">Select the level. Level 10 represents something extremely positive and beneficial. Level 1 would be extremely unhealty and hurtful to your wellbeing.</Label>
                        <Input type="select" name="level" id="editLevel" onChange={this.handleChange} value={this.state.level}>
                            <option>10</option>
                            <option>9</option>
                            <option>8</option>
                            <option>7</option>
                            <option>6</option>
                            <option>5</option>
                            <option>4</option>
                            <option>3</option>
                            <option>2</option>
                            <option>1</option>
                        </Input>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <legend>Radio Buttons</legend>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${HAPPY}`} />{<img src={require(`./icons/${HAPPY}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Happy
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${MEH}`}/>{<img src={require(`./icons/${MEH}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Meh
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${SAD}`} />{<img src={require(`./icons/${SAD}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Sad
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${BARBEQUE}`} />{<img src={require(`./icons/${BARBEQUE}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Barbeque
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${TACO}`} />{<img src={require(`./icons/${TACO}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Taco
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <Link to={`/${this.props.type}`}><Button onClick={this.handleIconSubmit}>Submit</Button></Link>
                </Form>
            )
        }else if(this.props.group === 'meds') {
            return (
                <Form>
                    <FormGroup>
                        <Label for="medicationName">Medication Name</Label>
                        <Input type="text" name="text" id="editItemText" placeholder="Enter medication name or brand here" onChange={this.handleChange} value={this.state.text} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="medicationDosage">Dosage</Label>
                        <Input type="text" name="dosage" id="editItemDosage" placeholder="Enter dosage here. Include unit of measure." onChange={this.handleChange} value={this.state.text} />
                    </FormGroup>
                    
                    <Button onClick={this.handleMedsSubmit}>Submit</Button>
                </Form>
            )
        }else {
            return (
                <Form>
                    <FormGroup>
                        <Label for="itemName">Text</Label>
                        <Input type="text" name="text" id="editItemText" placeholder="Enter medication name or brand here" onChange={this.handleChange} value={this.state.text} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="levelSelect">Select the level. Level 10 represents something extremely positive and beneficial. Level 1 would be extremely unhealty, hurtful, or negative.</Label>
                        <Input type="select" name="level" id="editLevel" onChange={this.handleChange} value={this.state.level}>
                            <option>10</option>
                            <option>9</option>
                            <option>8</option>
                            <option>7</option>
                            <option>6</option>
                            <option>5</option>
                            <option>4</option>
                            <option>3</option>
                            <option>2</option>
                            <option>1</option>
                        </Input>
                    </FormGroup>

                    <Button onClick={this.handleWordSubmit}>Submit</Button>
                </Form>
            )
        }
    }
}