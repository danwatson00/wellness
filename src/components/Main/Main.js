import React, { Component } from 'react';
import { loginWithGoogle, logout } from '../Auth/Auth';
import { rebase } from '../Base/Base.js';
import Home from '../Home/Home';
import Welcome from '../Welcome/Welcome';
import Feelings from '../Feelings/Feelings';
import { Route } from 'react-router-dom';
import './Main.css';

import * as routes from '../../constants/routes';


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            authed: false,
            loading: false,
            uid: null,
            name: null,
            photoURL: null,
            feelings: null,
            activities: null,
            descriptives: null,
            sleep: null,
            meds: null,
            diet: null,
            foods: null,
            physical: null

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
                    name: user.name,
                    photoURL: user.photoURL,
                    feelings: user.feelings,
                    activities: user.activities,
                    descriptives: user.descriptives,
                    sleep: user.sleep,
                    meds: user.meds,
                    diet: user.diet,
                    foods: user.foods,
                    physical: user.physical
                });
                //get DB stuff for user here
            } else {
                this.setState({
                    authed: false,
                    loading: false,
                    uid: null,
                    name: null,
                    photoURL: null,
                    feelings: null,
                    activities: null,
                    descriptives: null,
                    sleep: null,
                    meds: null,
                    diet: null,
                    foods: null,
                    physical: null
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
        .then((user) => {
            console.log(user);
            this.setState({
                authed: true,
                loading: false,
                name: user.displayName,
                photoURL: user.photoURL,
                feelings: user.feelings || [
                    { text: "Great!", icon: "/img/icons/white/happiness.png" },
                    { text: "Meh..", icon: "/img/icons/white/013-meh.png" },
                    { text: "Bad", icon: "/img/icons/white/009-sad-1.png" }
                ]

            });
        });
    }

    logoutApp() {
        console.log('App: calling logoutApp');
        logout();
    }


    render() {
        return (
            <div className="main">
                <div>
                    {this.state.authed
                        ?

                        <div className="container">
                            <div className="d-flex flex-column justify-content-center text-center">
                                <button type="button" onClick={() => this.logoutApp('google')} className="logout-btn log-btn btn btn-secondary">LOGOUT</button>
                            </div>
                            <Home name={this.state.name} 
                                photoURL={this.state.photoURL} 
                                feelings={this.state.feelings} />
                        </div>

                        :

                        <div className="container">
                            <div className="d-flex flex-column justify-content-center text-center">
                                <button type="button" onClick={() => this.authenticate('google')} className="login-btn log-btn btn btn-secondary">LOGIN</button>
                            </div>
                            <Welcome />
                        </div>

                    }
                </div>
               
                <Route
                    exact path={routes.FEELINGS}
                    component={() => <Feelings />}
                />
                <Route
                    exact path={routes.HOME}
                    component={() => <Home />}
                />
                
            </div>
        );
    }
}

export default Main;