import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './Footer.css'

class Footer extends Component {

    constructor(props) {
        super(props)
        this.goBack = this.goBack.bind(this)
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            justClicked: this.props.edit
        }
    }
    
    handleClick = () => {
        this.setState({ justClicked: this.props.edit })
        console.log("clickity", this.state.justClicked)
    }

    goBack() {
    this.props.history.goBack()
    }
    

    render() {

        return (
            <div className="footerDiv">
                <div className="backBtn" onClick={this.goBack}>Back</div>
                <Link className="editBtnLink" to={'/edit'}><div onClick={this.handleClick} className="editBtn">Edit</div></Link>
                <Link className="nextBtnLink" to={`/${this.props.next}`}><div className="nextBtn">Next</div></Link>
                <sm className="copyright" >Copyright &#169; 2018 Dan Watson</sm>
            </div>
        );
    }
}


export default Footer;