import React from 'react';
import "./BuildIconCol.css";


let BuildIconCol = (props) => {

    console.log("BuildIconCol data", props.data);
    console.log(" BuildIconCol props", props);

    const userIcons = props.data.map((item, index) =>
        <div key={index} className="iconTextDiv" >
            <img src={item.icon} alt="feeling emoji icons"></img>
            <p>{item.iconName}</p>
        </div>
    )
    return (
        <div className="iconColDiv">
            {userIcons}
        </div>
    )
}


export default BuildIconCol;