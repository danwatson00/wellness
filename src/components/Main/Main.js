import React, { Component } from 'react'
import { loginWithGoogle, logout } from '../Auth/Auth'
import Home from '../Home/Home'
import Menu from '../Menu/Menu'
import logo from '../../img/logo.png'
import userIcon from '../../img/user.png'
import Welcome from '../Welcome/Welcome'
import { Route, Switch } from 'react-router-dom'
import './Main.css'
import Descriptives from '../Descriptives/Descriptives'
import Activities from '../Activities/Activities'
import Feelings from '../Feelings/Feelings'
import Exercise from '../Exercise/Exercise'
import Diet from '../Diet/Diet'
import Sleep from '../Sleep/Sleep'
import Food from '../Food/Food'
import Meds from '../Meds/Meds'
import { Button } from 'semantic-ui-react'
import Journal from '../Journal/Journal'
import EditItems from '../EditItems/EditItems'
import EditItem from '../EditItem/EditItem'
// import Time from '../Time/Time'
import AddItem from '../AddItem/AddItem'
import FormSubmit from '../FormSubmit/FormSubmit'
import Entries from '../Entries/Entries'
import * as firebase from 'firebase'
// import * as image from '../../constants/images'
import * as routes from '../../constants/routes'

class Main extends Component {

    constructor(props) {
        super(props)

        //sets initial state of authed, loading, user
        this.state = {
            authed: false,
            loading: false,
            user: {},
        }
        
        this.authenticate = this.authenticate.bind(this)
        this.logoutApp = this.logoutApp.bind(this)
        this.buildFormObj = this.buildFormObj.bind(this)
    }

    // setStateFromStorage = () => {
    //     const storedUser = localStorage.getItem('user')
    //     if (storedUser) {
    //         const storedUserObj = JSON.parse(storedUser)
    //         this.setState({
    //             authed: true,
    //             user: storedUserObj.user
    //         })
    //     } else {
    //         console.log("not working agh")
    //     }
    // }

    componentDidMount() {
        const storedUser = localStorage.getItem('user')
        console.log("storedUser", storedUser)
        if (storedUser) {
        
            const storedUserObj = JSON.parse(storedUser)

            this.setState({
                authed: true,
                user: storedUserObj
            })
        } else {
                firebase.database().ref().child(`${this.props.uid}`).on('value', snap => {
                console.log("pulled user from fb", snap.val())
                this.setState({
                    user: snap.val()
                })
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
            console.log("then user", user)
            this.setState({
                authed: true,
                loading: false,
                user: {
                    name: user.name,
                    photoURL: user.photoURL,
                    uid: user.uid,
                    entries: user.entries,
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
            console.log("auth set user to storage", this.state.user)
            localStorage.setItem('user', JSON.stringify(this.state.user))
        })
    }

    logoutApp() {
        console.log('App: calling logoutApp')
        logout();
        this.setState({
            authed: false,
            user: {}
        })
    }

    // saveAnswers = (userObject) => {
    //     userObject.ownerID = this.props.user.id
    //     return fetch(`http://localhost:4000/contacts/`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(userObject)
    //     }).then((response) => {
    //         return response.json();
    //     }).then((data) => {
    //         this.setState({
    //             contact: data,
    //             addContact: false,
    //         })
    //         this.loadContacts(this.props.user.id);
    //     })
    // }

    buildFormObj = (obj, type) => {
        console.log("obj again", obj)
        localStorage.setItem(type, JSON.stringify(obj))
    }

    // formObj= obj.text
        // console.log("formObj", formObj)
        // formObj.activities = this.state.activities
        // formObj.sleep = this.state.sleep
        // formObj.meds = this.state.meds
        // formObj.diet = this.state.diet
        // formObj.foods = this.state.foods
        // formObj.exercise = this.state.exercise
        // for(var key in obj) {
        //     if(obj.hasOwnProperty(key)) {
        //         var value = obj[key]
        //     }
        // }
        // `'formObj'[Object.keys(obj)]` = value

    // showMe = () => {
    //     console.log("this state", this.state)
    // }

    // buildObjToSend = () => {
    //     const feeling = Object.assign({}, this.state.feeling);
    //     this.props.buildFormObj(feeling)
    // }

    // handleSubmit = (text, level, icon) => {
    //     const feeling = Object.assign({ text: text, level: level, icon: icon });
    //     this.props.buildFormObj(feeling)

    // }
    

    submitForm() {
        console.log("submitForm clicked")
        let formObj = {
                feeling: {"text":"Happy", "icon": "Happy", "level":'10'},
                sleep: {"text":"6-8 hours"},
                diet: "Healthy",
                exercise: "Very Active",
                journal: "Lorem ipsum"
        }

        firebase.database().ref(`users/${this.state.user.uid}/entries`).push(formObj)
    }

    // deleteForm(objKey) {
    //     console.log("deleteForm clicked")
    //     firebase.database().ref(`users/${this.state.user.uid}/moods/${objKey}`).remove(objKey)
    // }

    updateForm(obj, objKey) {
        console.log("updateForm clicked")
        firebase.database().ref(`users/${this.state.user.uid}/moods/${objKey}`).update(obj)
    }

    //TEST BUTTONS FOR FIREBASE FOR REFERENCE
    // <Button type="button" onClick={() => this.submitForm()} circular className="logout-btn">SUBMIT TEST</Button>
    // <Button type="button" onClick={() => this.deleteForm()} circular className="logout-btn">DELETE TEST</Button>
    // <Button type="button" onClick={() => this.updateForm()} circular className="logout-btn">UPDATE TEST</Button>

    render() {

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
        
                            </div>
                    
                            <Switch>
                            <Route 
                                exact path={routes.HOME}
                                component={() => <Home user={this.state.user} />}
                            />

                            <Route
                                exact path={routes.ADD_FEELING}
                                    component={() => <AddItem user={this.state.user} uid={this.state.user.uid} edit={this.state.user.feelings} type="feelings"n group="icon"  />}
                            />

                            <Route
                                exact path={routes.ADD_DESCRIPTIVE}
                                    component={() => <AddItem user={this.state.user} uid={this.state.user.uid} edit={this.state.user.descriptives} type="descriptives" group="icon"  />}
                            />

                            <Route
                                exact path={routes.ADD_ACTIVITIES}
                                    component={() => <AddItem user={this.state.user} uid={this.state.user.uid} edit={this.state.user.activities} type="activities" group="icon"  />}
                            />

                            <Route
                                exact path={routes.ADD_DIET}
                                    component={() => <AddItem user={this.state.user} edit={this.state.user.diet} uid={this.state.user.uid} type="diet" group="words" />}
                            />

                            <Route
                                exact path={routes.ADD_EXERCISE}
                                    component={() => <AddItem user={this.state.user} edit={this.state.user.exercise} uid={this.state.user.uid} type="exercise" group="words"  />}
                            />

                            <Route
                                exact path={routes.ADD_FOOD}
                                    component={() => <AddItem user={this.state.user} edit={this.state.user.foods} uid={this.state.user.uid} type="foods" group="icon"/>}
                            />

                            <Route
                                exact path={routes.ADD_MEDS}
                                    component={() => <AddItem user={this.state.user} edit={this.state.user.meds} uid={this.state.user.uid} type="meds" group="meds" />}
                            />

                            <Route
                                exact path={routes.ADD_SLEEP}
                                    component={() => <AddItem user={this.state.user} edit={this.state.user.sleep} uid={this.state.user.uid} type="sleep" group="words" />}
                            />

                            <Route
                                exact path={routes.EDIT_FEELINGS}
                                    component={() => <EditItems user={this.state.user} edit={this.state.user.feelings} uid={this.state.user.uid} type="feelings" group="icon"  />}
                            />
    
                            <Route
                                exact path={routes.EDIT_ACTIVITIES}
                                    component={() => <EditItems user={this.state.user} edit={this.state.user.activities} uid={this.state.user.uid} type="activities" group="icon"  />}
                            />

                            <Route
                                exact path={routes.EDIT_DESCRIPTIVES}
                                component={() => <EditItems user={this.state.user} edit={this.state.user.descriptives} uid={this.state.user.uid} type="descriptives" />}
                            />

                            <Route
                                exact path={routes.EDIT_DIET}
                                    component={() => <EditItems user={this.state.user} edit={this.state.user.diet} uid={this.state.user.uid} type="diet" />}
                            />

                            <Route
                                exact path={routes.EDIT_EXERCISE}
                                    component={() => <EditItems user={this.state.user} edit={this.state.user.exercise} uid={this.state.user.uid} type="exercise"  />}
                            />

                            <Route
                                exact path={routes.EDIT_FOOD}
                                    component={() => <EditItems user={this.state.user} edit={this.state.user.foods} uid={this.state.user.uid} type="foods"/>}
                            />

                            <Route
                                exact path={routes.EDIT_MEDS}
                                    component={() => <EditItems user={this.state.user} edit={this.state.user.meds} uid={this.state.user.uid} type="meds" />}
                            />

                            <Route
                                exact path={routes.EDIT_SLEEP}
                                    component={() => <EditItems user={this.state.user} edit={this.state.user.sleep} uid={this.state.user.uid} type="sleep" />}
                            />

                            <Route
                                exact path={routes.EDIT_ITEM_FEELINGS}
                                component={() => <EditItem user={this.state.user} edit={this.state.user.feelings} uid={this.state.user.uid} type="feelings" group="icon" />}
                            />

                            <Route
                                exact path={routes.EDIT_ITEM_ACTIVITIES}
                                component={() => <EditItem user={this.state.user} edit={this.state.user.activities} uid={this.state.user.uid} type="activities" group="icon" />}
                            />

                            <Route
                                exact path={routes.EDIT_ITEM_DESCRIPTIVES}
                                component={() => <EditItem user={this.state.user} edit={this.state.user.descriptives} uid={this.state.user.uid} type="descriptives" />}
                            />

                            <Route
                                exact path={routes.EDIT_ITEM_DIET}
                                component={() => <EditItem user={this.state.user} edit={this.state.user.diet} uid={this.state.user.uid} type="diet" />}
                            />

                            <Route
                                exact path={routes.EDIT_ITEM_EXERCISE}
                                component={() => <EditItem user={this.state.user} edit={this.state.user.exercise} uid={this.state.user.uid} type="exercise" />}
                            />

                            <Route
                                exact path={routes.EDIT_ITEM_FOOD}
                                component={() => <EditItem user={this.state.user} edit={this.state.user.foods} uid={this.state.user.uid} type="foods" />}
                            />


                            <Route
                                exact path={routes.EDIT_ITEM_MEDS}
                                component={() => <EditItem user={this.state.user} edit={this.state.user.meds} uid={this.state.user.uid} type="meds" />}
                            />

                            <Route
                                exact path={routes.EDIT_ITEM_SLEEP}
                                component={() => <EditItem user={this.state.user} edit={this.state.user.sleep} uid={this.state.user.uid} type="sleep" />}
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
                                    component={() => <Activities answers={this.state} user={this.state.user} buildFormObj={this.buildFormObj} />}
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

                            <Route
                                exact path={routes.FORM_SUBMIT}
                                component={() => <FormSubmit user={this.state.user} uid={this.state.user.uid} />}
                            />

                            <Route
                                exact path={routes.ENTRIES}
                                component={() => <Entries user={this.state.user} uid={this.state.user.uid} />}
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