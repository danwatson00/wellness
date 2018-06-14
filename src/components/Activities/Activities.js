import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './Activities.css';


import * as routes from '../../constants/routes';

class Activities extends Component {



    render() {

        const userActivities = this.props.user.activities.map((act) => (
                
            <div key={act.text} className="activitiesCard ">
                <img src={require(`./activitiesIcons/${act.icon}.png`)} alt="activities emoji" className="activitiesIcon"></img>
                    <h3 className="">{act.text}</h3>
                </div>
            
        ))

        return (
            <div className="activitiesDiv">
                <h2>What have you been up to today?</h2>
                <div className="activitiesCardDiv">
                    {userActivities}
                </div>
                <Link to={`/exercise`}><Button className="actSubmitBtn float-right">Next</Button></Link>

            </div>

        );

    }
}

export default Activities;