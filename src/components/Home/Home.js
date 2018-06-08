import Welcome from '../Welcome/Welcome';
import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Home extends Component {
    state = {
        
    }

    render() {
        return( 
            
            <div>
                <Welcome />
                <Button className="btn-lg createEntryBtn" outline color="light">Create An Entry</Button>
                <Button className="btn-lg pastEntriesBtn" outline color="light">View Past Entries</Button>
            </div>
        )
    }
}

export default Home;