import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/homePage";
import AboutProject from "./components/pages/aboutProject";
import AboutMe from "./components/pages/aboutMe";
import Header from "./components/header";

function App() {
    const [Page, updatePage] = useState(<HomePage />);

    return (
        <div>
            <Header updatePage={updatePage} />

            {Page}
        </div>
    );
}

export default App;
