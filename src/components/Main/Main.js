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


        ///Safe version
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            const storedUserObj = JSON.parse(storedUser)
            this.setState({
                authed: true,
                user: storedUserObj.user
            })
        } 

            //NEED THIS TO WORK
        // const storedUser = localStorage.getItem('user')
        // if (storedUser) {

        //     const storedUserObj = JSON.parse(storedUser)
        //     let key = storedUserObj.user.uid
        //     console.log("kkey", key)
        //     const userRef = firebase.database().ref().child(`${key}`)
        //     const activitiesRef = userRef.child('activities')
        //     console.log("activitiesRef", activitiesRef)
        //     activitiesRef.on('value', snap => {
        //         console.log("snap", snap.val())
        //         this.setState({
        //             user: snap.val()
        //         })
        //     })



        //MAY NOT NEED THIS
            // this.setState({
            //     authed: true,
            //     user: storedUserObj.user
            // })
            // .then(storedUserObj => {
            //     const key = storedUserObj.uid
            //     console.log("main key", key)
            // })
            // .then(key => {
            //     console.log("main key", key)
            // })
        else {
            console.log("not working agh")
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
                    feelings: user.feelings,
                    activities: user.activities,
                    descriptives: user.descriptives,
                    sleep: user.sleep,
                    meds: user.meds,
                    diet: user.diet,
                    foods: user.foods,
                    exercise: user.exercise
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