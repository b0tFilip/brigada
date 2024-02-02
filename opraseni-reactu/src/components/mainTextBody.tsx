import React from "react";
import "./mainTextBody.css";
import allTheDays from "./Days.json";

function mainTextBody() {
    //   const text = require("./Days.txt");

    const Days = Object.values(allTheDays);
    console.log(Days);
    const listOfDays = Days.map((dayText: string, index: number) => (
        <div id={"Day" + (index + 1)} className="dayPost">
            <h1> {"Day" + (index + 1)}</h1>
            <p className="dayPostText">{dayText}</p>
        </div>
    ));

    return (
        <div className="mainBodyContainer">
            <ul>{listOfDays}</ul>
        </div>
    );
}

export default mainTextBody;
