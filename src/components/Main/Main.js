import React, { Component } from 'react';
import { loginWithGoogle, logout } from '../Auth/Auth';
import { rebase } from '../Base/Base.js';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import logo from '../../img/logo.png';
import Welcome from '../Welcome/Welcome';
import Feelings from '../Feelings/Feelings';
import { Route } from 'react-router-dom';
import './Main.css';

import * as routes from '../../constants/routes';


class Main extends Component {

    constructor(props) {
        super(props)

        //sets initial state of authed, loading, user
        this.state = {
            authed: false,
            loading: false,
            user: {}
        }
            
            this.authenticate = this.authenticate.bind(this)
            this.logoutApp = this.logoutApp.bind(this)
        }

    componentDidMount() {

        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            const storedUserObj = JSON.parse(storedUser)
            this.setState({
                authed: true,
                user: storedUserObj.user
            })
        } 
    }
     

    // componentWillUnmount() {
    //     console.log("componentWillUnmount")
    //     this.authListener()
    // }

    authenticate() {
        console.log('App: calling autheticate for google')
        //Google Method to login
        loginWithGoogle()
        .then((user) => {
            this.setState({
                authed: true,
                loading: false,
                user: {
                    name: user.displayName,
                    photoURL: user.photoURL,
                    uid: user.uid,
                    //if no existing feelings, canned feelings are given
                    feelings: user.feelings || [
                        { "text": "Happy", "level": 10, "icon": "happyIcon" },
                        { "text": "Meh..", "level": 5, "icon": "mehIcon" },
                        { "text": "Sad", "level": 1, "icon": "sadIcon" }
                    ],
                    activities: user.activities || [
                        { "text": "Working", "icon": "/icons/white/happiness.png" },
                        { "text": "Cleaning", "icon": "/icons/white/happiness.png" },
                        { "text": "Yoga", "icon": "/icons/white/028-yoga.png" },
                        { "text": "Exercising", "icon": "/icons/white/040-strength.png" },
                        { "text": "Mountain Climbing", "icon": "/icons/white/climbing-with-rope.png" },
                        { "text": "Biking", "icon": "/icons/white/bicycle-rider.png" },
                        { "text": "Hiking", "icon": "/icons/white/hiking.png" },
                        { "text": "Camping", "icon": "/icons/white/camping.png" },
                        { "text": "Bowling", "icon": "/icons/white/bowling.png" },
                        { "text": "Fishing", "icon": "/icons/white/fishing-man.png" },
                        { "text": "Cleaning", "icon": "/icons/white/cleaning.png" },
                        { "text": "Photography", "icon": "/icons/white/038-camera.png" },
                    ],
                    descriptives: user.descriptives || ["Excited", "Scared", "Lonely", "Content", "Tired", "Exhausted", "Ill", "Happy", "Anxious", "Extatic", "Proud", "Determined", "Hopeful", "Worried"],
                    sleep: user.sleep || ["0 - 2 hours", "2 - 4 hours", "4 - 6 hours", "6 - 8 hours", "8 - 10 hours"],
                    meds: user.meds || [
                        { "brand": "Xanex", "dosage": "0.25mg" },
                        { "brand": "Alprazolam", "dosage": "0.25mg" },
                        { "brand": "Zoloft", "dosage": "25mg" }
                    ],
                    diet: user.diet || ["Very Healthy", "Average", "Not Healthy"],
                    foods: user.foods || [
                        { "text": "Tacos", "icon": "/icons/white/001-taco.png" },
                        { "text": "Cupcakes", "icon": "/icons/white/005-cupcake.png" },
                        { "text": "Pizza", "icon": "/icons/white/017-pizza.png" },
                        { "text": "Noodles", "icon": "/icons/white/020-noodles.png" },
                        { "text": "Pancakes", "icon": "/icons/white/018-pancakes.png" },
                        { "text": "Burger", "icon": "/icons/white/045-burger-2.png" },
                        { "text": "Veggie Burger", "icon": "/icons/white/046-burger-1.png" },
                        { "text": "Ice Cream", "icon": "/icons/white/046-ice-cream.png" },
                        { "text": "Rice", "icon": "/icons/white/rice.png" },
                        { "text": "Salad", "icon": "/icons/white/salad.png" },
                        { "text": "Bacon and Eggs", "icon": "/icons/white/032-eggs-and-bacon.png" },
                        { "text": "Beer", "icon": "/icons/white/039-beer.png" },
                    ],
                    physical: user.physical || ["Very Active", "SomewhatActive", "Not Active"]
                }
            })
            //This passes the values in state to local storage
            localStorage.setItem('user', JSON.stringify(this.state))
        });
    }

    logoutApp() {
        console.log('App: calling logoutApp')
        logout();
        this.setState({
            authed: false,
            user: {}
        })
    }


    render() {
        return (
            <div className="main">
                <div>
                    {this.state.authed
                        ?

                        <div className="container">
                            <div className="header">
                                <img src={logo} className="logo" alt="logo"></img>
                                <div className="d-flex flex-column justify-content-center text-center">
                                    <button type="button" onClick={() => this.logoutApp('google')} className="logout-btn log-btn btn btn-secondary">LOGOUT</button>
                                </div>
                                <Menu />
                            </div>
                            
                            <Home user={this.state.user} />
                            
                        </div>

                        :

                        <div className="container">
                            <div className="header">
                                <img src={logo} className="logo" alt="logo"></img>
                                
                                <Menu />
                            </div>
                            <Welcome />
                            <div className="d-flex flex-column justify-content-center text-center">
                                <button type="button" onClick={() => this.authenticate('google')} className="login-btn log-btn btn">Login with Google</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Main;