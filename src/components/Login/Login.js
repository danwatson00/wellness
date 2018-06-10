import React, { Component } from 'react';
import { loginWithGoogle, logout } from '../Auth/Auth';
import { rebase } from '../Base/Base.js';
import "./Login.css";



class Login extends Component {


    authenticate() {
        console.log('App: calling autheticate for google');
        loginWithGoogle()
            .then((data) => {
                let user = {
                    authed: data.authed,
                    uid: data.uid,
                    name: data.displayName,
                    photoURL: data.photoURL,
                    feelings: data.feelings,
                    activities: data.activities,
                    descriptives: data.decriptives,
                    sleep: data.sleep,
                    meds: data.meds,
                    diet: data.diet,
                    foods: data.foods,
                    physical: data.physical
                }
                return user;
            }
        );
    }
    

    logoutApp() {
        console.log('App: calling logoutApp');
        logout();
    }

    render() {
             
        
            return (

                <div>
                    {this.props.authed
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