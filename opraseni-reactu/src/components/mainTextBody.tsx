import React from "react";
import "./mainTextBody.css";
import allTheDays from "./Days.json"

function mainTextBody() {
    //   const text = require("./Days.txt");
    
    const Days = Object.values(allTheDays)
    console.log(Days)
    const listOfDays = Days.map((dayText: string, index: number) => (
        <a id={"Day" + (index + 1)} className="dayPost">
            {" "}
            {dayText}
        </a>
    ));

    return (
        <div className="mainBodyContainer">
            <ul>{listOfDays}</ul>
        </div>
    );
}

export default mainTextBody;
