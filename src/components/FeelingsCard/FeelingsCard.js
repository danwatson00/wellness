import React, { Component } from 'react';

class FeelingsCard extends Component {
    state = {
        user: {
            feelings: this.props.feelings
        }
    }

    render() {
        console.log("feelingsCard props", this.props.feelings);
        // const userFeelings = this.state.user.feelings.map((feeling) => (
        //     <div className="feelingCard">
        //         <img src={feeling.icon} alt="feeling emoji"></img>
        //         <h3>{feeling.text}</h3>
        //     </div>
        // ))

        return (
            <div className="feelingCardDiv">
                
            </div>
        )
    }
}

export default FeelingsCard;