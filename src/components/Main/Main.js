import React, { Component } from 'react';
import { loginWithGoogle, logout } from '../Auth/Auth';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import logo from '../../img/logo.png';
import userIcon from '../../img/user.png';
import Welcome from '../Welcome/Welcome';
import { Route, Switch } from 'react-router-dom';
import './Main.css';
import Descriptives from '../Descriptives/Descriptives';
import Activities from '../Activities/Activities';
import Feelings from '../Feelings/Feelings';
import Exercise from '../Exercise/Exercise';
import Diet from '../Diet/Diet';
import Sleep from '../Sleep/Sleep';
import Food from '../Food/Food';
import Meds from '../Meds/Meds';
import { Button } from 'semantic-ui-react';
import Journal from '../Journal/Journal';
import EditItems from '../EditItems/EditItems';
import EditItem from '../EditItem/EditItem';
import Time from '../Time/Time';
import * as firebase from 'firebase';

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

        // const storedUser = localStorage.getItem('user')
        // if (storedUser) {
        //     const storedUserObj = JSON.parse(storedUser)
        //     this.setState({
        //         authed: true,
        //         user: storedUserObj.user
        //     })
        // } 
        // const key = this.state.user.uid
        // const rootRef = firebase.database().ref().child(`users/${key}`)
        // console.log("rootRef", rootRef)
        // const userRef = rootRef.child(`${key}`)
        // console.log("userRef", userRef)
        // userRef.on('value', snap => {
        //     console.log("snap", snap.val())
        //     this.setState({
        //     //    user: snap.val() 
        //     })
        // })
        
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
                        { "text": "Happy", "level": 10, "icon": "happiness" },
                        { "text": "Meh..", "level": 5, "icon": "013-meh" },
                        { "text": "Sad", "level": 1, "icon": "009-sad-1" }
                    ],
                    activities: user.activities,
                    // activities: user.activities || [
                    //     { "text": "Skateboarding", "icon": "boy-with-skatingboard" },
                    //     { "text": "Yoga", "icon": "028-yoga" },
                    //     { "text": "Exercising", "icon": "040-strength" },
                    //     { "text": "Mountain Climbing", "icon": "climbing-with-rope" },
                    //     { "text": "Biking", "icon": "bicycle-rider" },
                    //     // { "text": "Hiking", "icon": "hiking" },
                    //     { "text": "Camping", "icon": "camping" },
                    //     { "text": "Bowling", "icon": "bowling" },
                    //     { "text": "Fishing", "icon": "fishing-man" },
                    //     { "text": "Cleaning", "icon": "cleaning" },
                    //     { "text": "Photography", "icon": "038-camera" },
                    // ],
                    descriptives: user.descriptives || ["Excited", "Scared", "Lonely", "Content", "Tired", "Exhausted", "Ill", "Happy", "Anxious", "Extatic", "Proud", "Determined", "Hopeful", "Worried"],
                    sleep: user.sleep || ["0 - 2 hours", "2 - 4 hours", "4 - 6 hours", "6 - 8 hours", "8 - 10 hours"],
                    meds: user.meds || [
                        { "brand": "Xanex", "dosage": "0.25mg" },
                        { "brand": "Alprazolam", "dosage": "0.25mg" },
                        { "brand": "Zoloft", "dosage": "25mg" }
                    ],
                    diet: user.diet || ["Very Healthy", "Average", "Not Healthy"],
                    foods: user.foods || [
                        { "text": "Tacos", "icon": "001-taco" },
                        { "text": "Cupcakes", "icon": "005-cupcake" },
                        { "text": "Pizza", "icon": "017-pizza" },
                        { "text": "Noodles", "icon": "020-noodles" },
                        { "text": "Pancakes", "icon": "018-pancakes" },
                        { "text": "Burger", "icon": "045-burger-2" },
                        { "text": "Veggie Burger", "icon": "046-burger-1" },
                        { "text": "Ice Cream", "icon": "046-ice-cream" },
                        { "text": "Rice", "icon": "rice" },
                        { "text": "Salad", "icon": "salad" },
                        { "text": "Bacon and Eggs", "icon": "032-egg-and-bacon" },
                        { "text": "Beer", "icon": "039-beer" },
                    ],
                    exercise: user.exercise || ["Very Active", "SomewhatActive", "Not Active"]
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

        console.log("main user", this.state.user)

        return (
            <div className="main">
                <div>
                    {this.state.authed
                        ?

                        <div className="container mainContainer">
                            <div className="header">
                                <img src={logo} className="logo" alt="logo"></img>
                                <div className="d-flex flex-column justify-content-center text-center">
                                    <Button type="button" onClick={() => this.logoutApp('google')} circular className="logout-btn">LOGOUT</Button>
                                </div>
                                <img src={this.state.user.photoURL} alt="user" className="profilePic"></img>
                                <Menu />
                               <Time />
        
                            </div>
                    
                            <Switch>
                            <Route 
                                exact path={routes.HOME}
                                component={() => <Home user={this.state.user} />}
                            />

                            <Route
                                exact path={routes.EDIT_FEELINGS}
                                    component={() => <EditItems edit={this.state.user.feelings} uid={this.state.user.uid} tyep="feelings"  />}
                            />
    
                            <Route
                                exact path={routes.EDIT_ACTIVITIES}
                                    component={() => <EditItems edit={this.state.user.activities} uid={this.state.user.uid} type="activities"  />}
                            />

                            <Route
                                exact path={routes.EDIT_DESCRIPTIVES}
                                component={() => <EditItems edit={this.state.user.descriptives} uid={this.state.user.uid} type="descpriptives" />}
                            />

                            <Route
                                exact path={routes.EDIT_DIET}
                                    component={() => <EditItems edit={this.state.user.diet} uid={this.state.user.uid} type="diet" />}
                            />

                            <Route
                                exact path={routes.EDIT_EXERCISE}
                                    component={() => <EditItems edit={this.state.user.exercise} uid={this.state.user.uid} type="exercise"  />}
                            />

                            <Route
                                exact path={routes.EDIT_FOOD}
                                    component={() => <EditItems edit={this.state.user.foods} uid={this.state.user.uid} type="foods"/>}
                            />

                            <Route
                                exact path={routes.EDIT_MEDS}
                                    component={() => <EditItems edit={this.state.user.meds} uid={this.state.user.uid} type="meds" />}
                            />

                            <Route
                                exact path={routes.EDIT_SLEEP}
                                    component={() => <EditItems edit={this.state.user.sleep} uid={this.state.user.uid} type="sleep" />}
                            />

                            <Route
                                exact path={routes.EDIT_ITEM}
                                    component={() => <EditItem user={this.state.user} uid={this.state.user.uid} />}
                            />
                            
                            <Route
                                exact path={routes.FEELINGS}
                                component={() => <Feelings user={this.state.user} />}
                            />
                            <Route
                                exact path={routes.DESCRIPTIVES}
                                component={() => <Descriptives user={this.state.user} />}
                            />
                            <Route
                                exact path={routes.ACTIVITIES}
                                component={() => <Activities user={this.state.user} />}
                            />

                            <Route
                                exact path={routes.EXERCISE}
                                component={() => <Exercise user={this.state.user} />}
                            />

                            <Route
                                exact path={routes.DIET}
                                component={() => <Diet user={this.state.user} />}
                            />

                            <Route
                                exact path={routes.SLEEP}
                                component={() => <Sleep user={this.state.user} />}
                            />

                            <Route
                                exact path={routes.FOOD}
                                component={() => <Food user={this.state.user} />}
                            />
                            
                            <Route
                                exact path={routes.MEDICATIONS}
                                component={() => <Meds user={this.state.user} />}
                            />

                            <Route
                                exact path={routes.JOURNAL}
                                component={() => <Journal user={this.state.user} />}
                            />
                    </Switch>

                        </div>

                        :

                        <div className="container">
                            <div className="header">
                                <img src={logo} className="logo" alt="logo"></img>
                                <img src={userIcon} className="userIcon" alt="user icon"></img>
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