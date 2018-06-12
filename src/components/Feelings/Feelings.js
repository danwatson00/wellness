import React, { Component } from 'react';
import "./Feelings.css";
import FeelingsCard from '../FeelingsCard/FeelingsCard';


class Feelings extends Component {

    
    
    render() {
       
        return (
            <div className="feelingsDiv">
                <h2>How are you feeling today?</h2>
                <FeelingsCard user={this.props.user} />
            </div>

        );
        
    }
}


export default Feelings;