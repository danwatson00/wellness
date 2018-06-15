import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

class Footer extends Component {

    constructor(props) {
        super(props)
        this.goBack = this.goBack.bind(this)
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            justClicked: null
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
        console.log("route", this.props.route)
        return (
            <div className="footerDiv">
                <div className="backBtn" onClick={this.goBack}>Back</div>
                <Link className="editBtnLink" to={this.props.route}><div onClick={this.handleClick} className="editBtn">Edit</div></Link>
                <Link className="nextBtnLink" to={`/${this.props.next}`}><div className="nextBtn">Save &#38; Next</div></Link>
                <p className="copyright" >Copyright &#169; 2018 Dan Watson</p>
            </div>
        );
    }
}


export default Footer;