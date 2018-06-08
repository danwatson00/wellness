import React, { Component } from 'react';
import { loginWithGoogle, logout } from '../Auth/Auth';
import { rebase } from '../Base/Base.js';
import "./Login.css";



class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            authed: false,
            loading: true,
            uid: null,
        }

        this.authenticate = this.authenticate.bind(this);
        this.logoutApp = this.logoutApp.bind(this);

    }

    

    componentDidMount() {
        console.log("componentDidMount");
        this.authListener = rebase.initializedApp.auth().onAuthStateChanged((user) => {

            if (user) {
                this.setState({
                    authed: true,
                    loading: false,
                    uid: user.uid,
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

    componentWillUnmount() {
        console.log("componentWillUnmount");
        this.authListener();
    }

    authenticate() {
        console.log('App: calling autheticate for google');
        loginWithGoogle()
            .then(() => {
                this.setState({
                    authed: true
                });
            });
    }

    logoutApp() {
        console.log('App: calling logoutApp');
        logout();
    }

    render() {
        return (
                <div>
                    {this.state.authed
                        ?

                        <div className="container">
                            <div className="d-flex flex-column justify-content-center text-center">
                                <button type="button" onClick={() => this.logoutApp('google')} className="logout-btn log-btn btn btn-secondary">LOGOUT</button>
                            </div>
                        </div>

                        :

                        <div className="container">
                            <div className="d-flex flex-column justify-content-center text-center">
                                <button type="button" onClick={() => this.authenticate('google')} className="login-btn log-btn btn btn-secondary">LOGIN</button>
                            </div>
                        </div>
                    
                    }
                </div>
        )
    }
}

export default Login;