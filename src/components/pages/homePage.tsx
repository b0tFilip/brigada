import React from "react";
import "./homePage.css";
import DayList from "../dayList";
import MainTextBody from "../mainTextBody";
function HomePage() {
    return (
        <div className="HomePageContainer">
            <div className="MB-container">
                <DayList />
                <MainTextBody />
            </div>
        </div>
    );
}

export default HomePage;
