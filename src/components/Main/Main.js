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
        //When component mounts this listens for a sate change of the user and if there is a user it sets the state accordingly
        this.authListener = rebase.initializedApp.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log("componentDidMount", user)
                this.setState({
                    authed: true,
                    loading: false,
                    user: {
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
                    }
                })
                
            } else {
                //If there is not a user, it sets all state to null or false
                this.setState({
                    authed: false,
                    loading: false,
                    user: {
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
                })
            }
        })
    }


    componentWillUnmount() {
        console.log("componentWillUnmount")
        this.authListener()
    }

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
                        { "text": "Happy", "level": 10, "icon": "/img/icons/white/happiness.png" },
                        { "text": "Meh..", "level": 5, "icon": "/img/icons/white/013-meh.png" },
                        { "text": "Sad", "level": 1, "icon": "/img/icons/white/009-sad-1.png" }
                    ],
                    activities: user.activities || [
                        { "text": "Working", "icon": "/img/icons/white/happiness.png" },
                        { "text": "Cleaning", "icon": "/img/icons/white/happiness.png" },
                        { "text": "Yoga", "icon": "/img/icons/white/028-yoga.png" },
                        { "text": "Exercising", "icon": "/img/icons/white/040-strength.png" },
                        { "text": "Mountain Climbing", "icon": "/img/icons/white/climbing-with-rope.png" },
                        { "text": "Biking", "icon": "/img/icons/white/bicycle-rider.png" },
                        { "text": "Hiking", "icon": "/img/icons/white/hiking.png" },
                        { "text": "Camping", "icon": "/img/icons/white/camping.png" },
                        { "text": "Bowling", "icon": "/img/icons/white/bowling.png" },
                        { "text": "Fishing", "icon": "/img/icons/white/fishing-man.png" },
                        { "text": "Cleaning", "icon": "/img/icons/white/cleaning.png" },
                        { "text": "Photography", "icon": "/img/icons/white/038-camera.png" },
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
                        { "text": "Tacos", "icon": "/img/icons/white/001-taco.png" },
                        { "text": "Cupcakes", "icon": "/img/icons/white/005-cupcake.png" },
                        { "text": "Pizza", "icon": "/img/icons/white/017-pizza.png" },
                        { "text": "Noodles", "icon": "/img/icons/white/020-noodles.png" },
                        { "text": "Pancakes", "icon": "/img/icons/white/018-pancakes.png" },
                        { "text": "Burger", "icon": "/img/icons/white/045-burger-2.png" },
                        { "text": "Veggie Burger", "icon": "/img/icons/white/046-burger-1.png" },
                        { "text": "Ice Cream", "icon": "/img/icons/white/046-ice-cream.png" },
                        { "text": "Rice", "icon": "/img/icons/white/rice.png" },
                        { "text": "Salad", "icon": "/img/icons/white/salad.png" },
                        { "text": "Bacon and Eggs", "icon": "/img/icons/white/032-eggs-and-bacon.png" },
                        { "text": "Beer", "icon": "/img/icons/white/039-beer.png" },
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
                            <Home user={this.state.user} />
                            <Feelings user={this.state.user} />
                            
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