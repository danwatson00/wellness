import React from 'react'
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import * as image from '../../constants/images'
import * as firebase from 'firebase'
import Footer from '../Footer/Footer'
import * as routes from '../../constants/routes'

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

    handleClick = () => {
            let obj = this.state.text
            console.log("journal obj", obj)
            localStorage.setItem('journal', JSON.stringify(obj))
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
            <div>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail"><h2>Journal Entry</h2></Label>
                        <Input type="textarea" name="text" id="editItemText" placeholder="Begin your journal entry" style={{ height: 400 }} onChange={this.handleChange} value={this.state.text} />
                    </FormGroup>
                </Form>
                <div className="footerDiv">
                    {/*<div className="backBtn" onClick={this.goBack}>Back</div>*/}
                    <Link className="nextBtnLink" onClick={() => this.handleClick(this.state.journal)} to={`/submit`}><div className="nextBtn">Complete</div></Link>
                    <p className="copyright" >Copyright &#169; 2018 Dan Watson</p>
                </div>
            </div>
            
        )
    }
}
            
        
    
