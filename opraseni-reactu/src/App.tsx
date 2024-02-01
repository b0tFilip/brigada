import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import DayList from "./components/dayList";
import MainTextBody from "./components/mainTextBody";
function App() {
	return (
		<div className="App">
			<Header />
            <div className="MB-container">
                <DayList />
                <MainTextBody />
            </div>
		</div>
	);
}

export default App;
