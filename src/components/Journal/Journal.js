import React from 'react'
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as image from '../../constants/images';
import * as firebase from 'firebase';

export default class Journal extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            text: ""
        }

        this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)

    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    
        // firebase.database().ref(`users/${this.props.uid}`).on('value', snap => {
        //     console.log("editItems snap", snap.val())
        //     let theUser = { ...this.props.user }
        //     theUser = snap.val()
        //     console.log("theUser", theUser)
        //     this.setState({
        //         user: theUser
        //     }
        //     )
        //     localStorage.setItem('user', JSON.stringify(theUser))
        // })
    

    
    render() {

        return (
            <Form>
                <FormGroup>
                    <Label for="exampleEmail"><h2>Journal Entry</h2></Label>
                    <Input type="textarea" name="text" id="editItemText" placeholder="Begin your journal entry" style={{ height: 400 }} onChange={this.handleChange} value={this.state.text} />
                </FormGroup>
                <Button className="btn-lg" outline color="light" onClick={this.handleSubmit}>Submit Entry</Button>
            </Form>
        )
    }
}
            
        
    
