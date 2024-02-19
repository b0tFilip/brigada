import React from "react";
import "./header.css";
import App from "../App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Header({updatePage}:any) {
    return (
        <div className="headerContainer">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Nokia_3310_blue_R7309170_wp.png/1200px-Nokia_3310_blue_R7309170_wp.png"
                alt="Nokia img"
                className="icon"
            />
            <div className="pageNameContainer">
                <p className="pageName"> 30 dní </p>
                <p className="pageName"> NOKIE </p>
            </div>
            <div className="linkContainer">
                <button className="headerLink" onClick={updatePage(0)}>
                    Domů
                </button>
                <a className="headerLink" onClick={updatePage(1)}>
                    O mně
                </a>
                <a className="headerLink" onClick={updatePage(2)}>
                    {" "}
                    O projektu
                </a>
            </div>
        </div>
    );
}

export default Header;
