import React from "react";
import "./mainTextBody.css";

function mainTextBody() {
    var Days:string[];
    fetch(text)
        .then((r) => r.text())
        .then((text) => {
            Days = text.split('$$$');
        });
    const listOfDays = Days.map((dayText: string , index:number) => (
        <a href={'"#Day"${ index }'} className="dayPost">
            {" "}
            Day {dayText}
        </a>
    ));


    return (
        <div className="mainBodyContainer">
            
        </div>

    );

}


export default mainTextBody;
