import React from 'react'
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as image from '../../constants/images';
import './EditItem.css';
import * as firebase from 'firebase';

export default class EditItem extends React.Component {

    buildIconSelectList = () => {

    }

    handleSubmit = () => {
        // this.setState({ text: text, level: level, icon: icon })
        // console.log(this.state)
        // itemRef = firebase.database().ref(`users/${this.props.uid}/${this.props.type}`).push(item)
        const itemRef = firebase.database().ref(`users/${this.props.uid}/${this.props.type}/${this.props.item}`);
        let item = {
            text: this.state.text,
            level: this.state.level,
            icon: this.state.icon
        }
        itemRef.update(item);
        // this.setState({
        //     text: '',
        //     level: '',
        // });
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
                    <Label for="itemText"><h2 className="itemTextLabel">Edit Your Item</h2></Label>
                    <h2 className="EditLabelFix">Item Text</h2>
                    <Input type="text" name="Item Text" id="editItemText" placeholder="Enter text here" />
                </FormGroup>
                <FormGroup>
                    <Label className="levelSelectLabel" for="levelSelect"><h2 className="editItemH2">Select the level</h2><p>Level 10 represents something extremely positive and beneficial. Level 1 would be extremely unhealty and hurtful to your wellbeing.</p></Label>
                    <Input type="select" name="level" id="editLevel">
                        <option>Level 10</option>    
                        <option>Level 9</option>
                        <option>Level 8</option>
                        <option>Level 7</option>
                        <option>Level 6</option>
                        <option>Level 5</option>
                        <option>Level 4</option>
                        <option>Level 3</option>
                        <option>Level 2</option>
                        <option>Level 1</option>
                    </Input>
                </FormGroup>
                <FormGroup className="iconSelectFormGroup" tag="fieldset">
                    <legend><h2>Radio Buttons</h2></legend>
                    <FormGroup className="iconRadioInput" check>
                        <Label check>
                            <Input  type="radio" name="radio1" /> {<img src={require(`./icons/${HAPPY}.png`)} alt="icon" className="iconSelectIcon"></img>}
                            Happy
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{<img src={require(`./icons/${MEH}.png`)} alt="icon" className="iconSelectIcon"></img>}
                            Meh
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{<img src={require(`./icons/${SAD}.png`)} alt="icon" className="iconSelectIcon"></img>}
                            Sad
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{<img src={require(`./icons/${BARBEQUE}.png`)} alt="icon" className="iconSelectIcon"></img>}
                            Barbeque
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{<img src={require(`./icons/${TACO}.png`)} alt="icon" className="iconSelectIcon"></img>}
                            Taco
                        </Label>
                    </FormGroup>
                </FormGroup>
                <Button onClick={() => this.handleSubmit()}>Submit</Button>
            </Form>
        );
    }
}