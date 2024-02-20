import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/homePage";
import AboutProject from "./components/pages/aboutProject";
import AboutMe from "./components/pages/aboutMe";
import Header from "./components/header";

function App() {
    const [Page, updatePage] = useState(<HomePage />);

    function handleUpdatePage(opt: number) {
        if (opt == 1) updatePage(<HomePage />);
        else if (opt == 2) updatePage(<AboutMe />);
        else if (opt == 3) updatePage(<AboutProject />);
    }

    return (
        <div>
            <Header updatePage={updatePage} />

            {Page}
        </div>
    );
}

export default App;
