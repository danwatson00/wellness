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
            radio1: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    handleSubmit(e) {
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
        });
    }

    // submitForm() {
    //     console.log("submitForm clicked")
    //     let newObj = {
    //         text: "Excited",
    //         icon: "016-happy-2",
    //         level: 10
    //     }

    //     firebase.database().ref(`users/${this.state.user.uid}/${this.props.type}`).push(newObj)
    // }

    buildIconSelectList = () => {

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
                <Button onClick={this.handleSubmit}>Submit</Button>
            </Form>
        );
    }
}