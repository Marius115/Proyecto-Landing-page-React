import React from "react";
import { Card } from "./Card";

export const Cardgroup = () => {
	return (
		<div className="card-group d-flex m-2px">
			<Card
				title="Card title"
				description="Some quick example text to build on the card title and make
		                     up the bulk of the card's content."
				buttonLabel="Find out more!"
			/>

			<Card
				title="Card title"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
					tempor incididunt."
				buttonLabel="Find out more!"
			/>

			<Card
				title="Card title"
				description="Some quick example text to build on the card title and make
		                     up the bulk of the card's content."
				buttonLabel="Find out more!"
			/>

			<Card
				title="Card title"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
				tempor incididunt."
				buttonLabel="Find out more!"
			/>
		</div>
	);
};
