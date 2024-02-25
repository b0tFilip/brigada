import React, { useContext, useState } from "react";
import "./App.css";
import HomePage from "./components/pages/homePage";
import AboutProject from "./components/pages/aboutProject";
import AboutMe from "./components/pages/aboutMe";
import Header from "./components/header";

function App() {
    const [page, updatePage] = useState("HomePage");

    return (
        <>
            {" "}
            <Header updatePage={updatePage} />
            {page === "HomePage" && <HomePage />}
            {page === "AboutMe" && <AboutMe />}
            {page === "AboutProject" && <AboutProject />}
        </>
    );
}

export default App;
