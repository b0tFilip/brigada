import React from "react";
import "./header.css";

function Header() {
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
		</div>
	);
}

export default Header;
