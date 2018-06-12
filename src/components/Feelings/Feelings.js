import React, { Component } from 'react';
import "./Feelings.css";
import FeelingsCard from '../FeelingsCard/FeelingsCard';

class Feelings extends Component {
    
    state = {
        user: this.props.user
    }

    //checks if there is a user in localStorage. If there is, it is saved as storedUser, parsed and passed into loadFeelings function
    componentDidMount() {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            const storedUserObj = JSON.parse(storedUser)
            console.log("storedUserObj uid", storedUserObj.user.uid)
            this.loadFeelings(storedUserObj.user.uid)
        }else{
            console.log("no user")
        }
    }
    
    //This function 
    loadFeelings = (uid) => {
        console.log("loadfeelings uid", uid)
        fetch(`https://wellness-wat01.firebaseio.com/users/${uid}/feelings.json`)
        .then((data) => {
            return data.json()
        }).then((userFeelings)=>{
            this.setState({
                feelings: userFeelings
            })
            console.log("userFeelings", userFeelings)
        })
    
    }
    
    render() {
        console.log("render user feelings", this.state.feelings);
       
        return (
            <div className="feelingsDiv">
                <h2>How are you feeling today?</h2>
                <FeelingsCard feelings={this.state.feelings} />
            </div>

        );
        
    }
}


export default Feelings;