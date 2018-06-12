import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Home.css';
import Feelings from '../Feelings/Feelings';
import { Route, Link } from 'react-router-dom';

import * as routes from '../../constants/routes';

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
                    <div className="welcomeHeading">
                        <h1>Hello, {this.props.user.name}!</h1>
                        <h2>Welcome to your Wellness Tracker</h2>
                        <img src={this.props.user.photoURL} alt="user" className="profilePic"></img>
                    </div>
                    <p>Create an entry or view past entries by clicking on the buttons below.</p>
                    <Link to={`/feelings`} className="feelingsLink"><Button className="btn-lg createEntryBtn" outline color="light">Create An Entry</Button></Link>
                    <Button className="btn-lg pastEntriesBtn" outline color="light">View Past Entries</Button>

                    <Route
                        exact path={routes.FEELINGS}
                        component={() => <Feelings user={this.state.user} />}
                    />

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