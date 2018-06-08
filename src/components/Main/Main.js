import React, { Component } from 'react';
import Login from '../Login/Login';
import Home from '../Home/Home';
import { rebase } from '../Base/Base.js';


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authed: false,
            loading: true,
            user: {},
            uid: null,

        }

    }

    componentDidMount() {
        console.log("componentDidMount");
        this.authListener = rebase.initializedApp.auth().onAuthStateChanged((user) => {

            if (user) {
                this.setState({
                    authed: true,
                    loading: false,
                    uid: user.uid,
                    user: user,
                });
                //get DB stuff for user here
            } else {
                this.setState({
                    authed: false,
                    loading: false,
                    uid: null,
                })
            }
        })
    }
    render() {
        return (
            <div className="main">
                <Login />
                <Home />
                
            </div>
        );
    }
}

export default Main;