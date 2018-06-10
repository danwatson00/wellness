import React, { Component } from 'react';
import "./Feelings.css";
import BuildIconCol from '../BuildIconCol/BuildIconCol';


//These are the basic feelings that will load if the user has no saved feelings
const basicFeelings = [
    {text:"Great!", icon:"/img/icons/white/happiness.png"},
    {text: "Meh..", icon: "/img/icons/white/013-meh.png"},
    {text: "Bad", icon: "/img/icons/white/009-sad-1.png" }
    ]
class Feelings extends Component {

    state = {
        authed: this.props.authed, 
        uid: this.props.uid,
        name: this.props.displayName,
        photoURL: this.props.photoURL,
        feelings: this.props.feelings,
        activities: this.props.activities,
        descriptives: this.props.descriptives,
        sleep: this.props.sleep,
        meds: this.props.meds,
        diet: this.props.diet,
        foods: this.props.foods,
        physical: this.props.physical
        }
    
    


    loadFeelings = (feelings) => {
        

    }

    render() {
        return (
            <div className="feelings">
               

            </div>
        );
    }
}

export default Feelings;