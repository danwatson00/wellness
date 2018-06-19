import React, { Component } from 'react';



class Time extends Component {

    constructor(props) {
        super(props)
        this.getTheTime= this.getTheTime.bind(this)
    }

    getTheTime = () => {
        let currentDateTime = new Date()

        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        let currentMinutes = currentDateTime.getMinutes()
        let currentHours = currentDateTime.getHours()
        let meridiem
        let adjustedHours
        let timeToday

        if (currentHours >= 12) {
            let meridiem = "PM"
        } else {
            let meridiem = "AM"
        }
        if (currentHours >= 13) {
            let adjustedHours = currentHours - 12
        }
        let currentMonth = monthNames[currentDateTime.getMonth()]
        let currentDate = currentDateTime.getDate()
        let currentYear = currentDateTime.getFullYear()
        let dateToday = currentMonth + " " + currentDate + ", " + currentYear
        timeToday = adjustedHours + ":" + currentMinutes + " " + meridiem + "," + dateToday
        console.log(timeToday);
        return timeToday;

    }

    render(){
    
        return (

            <div>
                
            </div>

        )

    }
}

export default Time;