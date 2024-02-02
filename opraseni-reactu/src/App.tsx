import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/homePage";
import AboutProject from "./components/pages/aboutProject";
import AboutMe from "./components/pages/aboutMe";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/AboutMe" element={<AboutMe />}/>
                <Route path="/AboutProject" element={<AboutProject />}/>
            </Routes>
        </Router>
    );
}

export default App;
