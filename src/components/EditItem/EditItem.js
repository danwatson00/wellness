import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
// import * as image from '../../constants/images';
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
        const ANGRY = '024-sad';
        const FISHING = 'fishing-man';
        const HIKING = 'hiking';
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

        return (
            <Form>
                <FormGroup>
                    <Label for="itemText"><h2 className="editItemLabel">Edit Your Item</h2></Label>
                    <Input type="text" name="Item Text" id="editItemText" placeholder="Enter text here" />
                </FormGroup>
                <FormGroup>
                    <Label className="levelSelectLabel" for="levelSelect"><h2 className="editItemH2">Select the level</h2><p>Level 10 represents something extremely positive and beneficial. Level 1 would be unhealty and/or hurtful to your wellbeing.</p></Label>
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
                    <FormGroup className="IconRadioDiv" check>
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${HAPPY}`} />{<img src={require(`./icons/${HAPPY}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Happy
                            </Label>
                        </FormGroup>
                        <FormGroup className="IconRadioDiv" check>
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${MEH}`}/>{<img src={require(`./icons/${MEH}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Meh
                            </Label>
                        </FormGroup>
                        <FormGroup check className="IconRadioDiv">
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${SAD}`} />{<img src={require(`./icons/${SAD}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Sad
                            </Label>
                        </FormGroup>
                        <FormGroup check className="IconRadioDiv">
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${BARBEQUE}`} />{<img src={require(`./icons/${BARBEQUE}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Barbeque
                            </Label>
                        </FormGroup>
                        <FormGroup check className="IconRadioDiv">
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${TACO}`} />{<img src={require(`./icons/${TACO}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Taco
                            </Label>
                        </FormGroup>
                        <FormGroup check className="IconRadioDiv">
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${YAWN}`} />{<img src={require(`./icons/${YAWN}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Yawn
                            </Label>
                        </FormGroup>
                        <FormGroup check className="IconRadioDiv">
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${ANGRY}`} />{<img src={require(`./icons/${ANGRY}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Angry
                            </Label>
                        </FormGroup>
                        <FormGroup check className="IconRadioDiv">
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${FISHING}`} />{<img src={require(`./icons/${FISHING}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Fishing
                            </Label>
                        </FormGroup>
                        <FormGroup check className="IconRadioDiv">
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${HIKING}`} />{<img src={require(`./icons/${HIKING}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Hiking
                            </Label>
                        </FormGroup>
                        <FormGroup check className="IconRadioDiv">
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${SURPRISED}`} />{<img src={require(`./icons/${SURPRISED}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Surprised
                            </Label>
                        </FormGroup>
                        <FormGroup check className="IconRadioDiv">
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${SWIMMING}`} />{<img src={require(`./icons/${SWIMMING}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Swimming
                            </Label>
                        </FormGroup>
                        <FormGroup check className="IconRadioDiv">
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${CANOEING}`} />{<img src={require(`./icons/${CANOEING}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Canoeing
                            </Label>
                        </FormGroup>
                        <FormGroup check className="IconRadioDiv">
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${SPAGHETTI}`} />{<img src={require(`./icons/${SPAGHETTI}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Spaghettin
                            </Label>
                        </FormGroup>
                        <FormGroup check className="IconRadioDiv">
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${TIRED}`} />{<img src={require(`./icons/${TIRED}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Tired
                            </Label>
                        </FormGroup>
                        <FormGroup check className="IconRadioDiv">
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${SICK}`} />{<img src={require(`./icons/${SICK}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Sick
                            </Label>
                        </FormGroup>
                        <FormGroup check className="IconRadioDiv">
                            <Label check>
                                <Input type="radio" name="radio1" onChange={this.handleChange} value={`${CHIPS}`} />{<img src={require(`./icons/${CHIPS}.png`)} alt="icon" className="iconSelectIcon"></img>}
                                Chips
                            </Label>
                        </FormGroup>
                </FormGroup>
                <Link to={`/${this.props.type}`}><Button className="btn-lg" onClick={this.handleSubmit} outline color="light">Submit</Button></Link>
            </Form>
        );
    }
}