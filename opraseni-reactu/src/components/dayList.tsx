import React from "react";
import "./dayList.css";

function DayList() {
	const n = 30;
	const count = Array.from({ length: n }, (_, index) => index + 1);
	const listOfDays = count.map((number: number) => (
		<a href={'"#Day"${number}'} className="dayListing">
			{" "}
			Day {number.toString()}
		</a>
	));

	return (
		<div className="dayListContainer">
			<ul>{listOfDays}</ul>
		</div>
	);
}

export default DayList;
