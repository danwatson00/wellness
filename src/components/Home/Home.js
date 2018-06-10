import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Home.css';

class Home extends Component {
    
    state = {
            uid: this.props.uid || '',
            name: this.props.name || '',
            photoURL: this.props.photoURL || '',
            feelings: this.props.feelings || '',
            activities: this.props.activities || '',
            descriptives: this.props.descriptives || '',
            sleep: this.props.sleep || '',
            meds: this.props.meds || '',
            diet: this.props.diet || '',
            foods: this.props.foods || '',
            physical: this.props.physical || ''
        }
        
    
        

    render() {
        return( 
            <div>
                <h1>Welcome to your Wellness Tracker, {this.props.name}! </h1>
                <img src={this.props.photoURL} alt="user" className="profilePic"></img>
                <p>Create an entry or view past entries by clicking on the buttons below.</p>
                <Button className="btn-lg createEntryBtn" outline color="light">Create An Entry</Button>
                <Button className="btn-lg pastEntriesBtn" outline color="light">View Past Entries</Button>
            </div>
        );
    }
}

export default Home;