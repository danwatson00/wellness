import React, { Component } from 'react';
import './Welcome.css';


class Welcome extends Component {
    render() {
        return (
            <div className="welcomeDiv">
                <h1>Welcome to your Wellness Tracker</h1>
                <p>Use this app to track how you feel each day combined with other factors like how well you slept, what you ate, what medications you may have taken, etc. View your results over time and examine the data to try and improve your overall well-being.</p>
                <p>Login with your Google Account by clicking the button above in order to use the app. If you don't have a Google account, you can create one on their site here: <a href="https://accounts.google.com/signup" target="_blank" rel="noopener noreferrer" className="googleAcctLink">Create a Google Account</a></p>
                <div className="d-flex flex-column justify-content-center text-center">
                    
                </div>
            </div>
        );
    }
}

export default Welcome;