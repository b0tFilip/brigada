import React, { useEffect } from "react";
import "./aboutMe.css";
import Introduction from "../introduceYourself";

function AboutMe() {
    useEffect(() => { console.log((new Date()).getTime()); return () => { console.log("Zavřel jsem componentu aboutME")
}}, [])
return (
    <div>
        <div className="mainFieldContainer">
            <div className="mainField">
                {" "}
                ¨
                <div className="topContainer">
                    <h1> Něco málo o mně</h1>
                    <img
                        className="photo"
                        src="https://lastfm.freetls.fastly.net/i/u/300x300/08d0400757e0ab6dd8b4d689bfad3dce.jpg"
                        alt="Já"
                    />
                </div>
                <p className="textAboutMe">
                    BLlah blah vlasclnlkvnasknva <br />
                    aligngnbkjankv <br />
                    lasdbnvkjbaks n <br />
                </p>
                <Introduction />
            </div>
        </div>
    </div>
);
}

export default AboutMe;
