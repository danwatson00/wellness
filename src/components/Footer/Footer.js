import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

class Footer extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            step: null
        }
    }

    handleClick = () => {
        this.setState({ justClicked: this.props.edit })
        console.log("clickity", this.state.justClicked)
    }

//     nextStep = () => {
//         this.setState({
//             step: this.state.step + 1
//         })
//     }

// // Same as nextStep, but decrementing
//     previousStep = () => {
//         this.setState({
//             step: this.state.step - 1
//         })
//     }
    

    render() {

        // let answers = this.props.answer
        // let category = this.props.type

        console.log("route", this.props.route)
        return (
            <div className="footerDiv">
                {/*<div className="backBtn" onClick={this.goBack}>Back</div>*/}
                <Link className="editBtnLink" to={this.props.route}><div onClick={this.handleClick} className="editBtn">Edit</div></Link>
                <Link className="nextBtnLink" onClick={this.props.iconSubmitFunc}  to={`/${this.props.next}`}><div className="nextBtn">Save &#38; Next</div></Link>
            </div>
        );
    }
}


export default Footer;