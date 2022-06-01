import React from "react";

//include images into your bundle
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Cardgroup } from "./Cardgroup";

//create your first component
export const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Cardgroup />
			</div>
		</React.Fragment>
	);
};
