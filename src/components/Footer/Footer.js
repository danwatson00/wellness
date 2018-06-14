import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this); // i think you are missing this
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {


        return (
            <div className="footerDiv">
                <div>
                    <Button onClick={this.goBack}>Back</Button>
                    <Link to={'/'}><Button className="editButton">Edit</Button></Link>
                    <Link to={`/${next}`}><Button className="submitBtn float-right">Next</Button></Link>
                </div>
                <div>
                    <p className="copyright" >Copyright &#169; 2018 Dan Watson, 2018</p>
                </div>
            </div>

        );

    }
}


export default Footer;