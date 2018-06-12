import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Home.css';
import Feelings from '../Feelings/Feelings';

class Home extends Component {
    

    state = {
        user: this.props.user
    }

    componentDidMount(){
        const stored = localStorage.getItem('user');
        console.log("didMount stored", stored);
        if(stored){
            const parseDB = JSON.parse(stored);
            this.setState({
                user: parseDB.user
            })
        }
    }

        render(){
            return( 
                <div>
                    <h1>Welcome to your Wellness Tracker, {this.props.user.name}! </h1>
                    <img src={this.props.user.photoURL} alt="user" className="profilePic"></img>
                    <p>Create an entry or view past entries by clicking on the buttons below.</p>
                    <Button className="btn-lg createEntryBtn" outline color="light">Create An Entry</Button>
                    <Button className="btn-lg pastEntriesBtn" outline color="light">View Past Entries</Button>
                </div>
            );
        }
}

// Home.propTypes = {
//     name: React.PropTypes.string,
//     photoURL: React.PropTypes.string,
//     feelings: React.PropTypes.array
// };

export default Home;