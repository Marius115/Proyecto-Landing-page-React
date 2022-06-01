import React from "react";
import PropTypes from "prop-types";

export const Card = ({ ...props }) => {
	return (
		<div className="card text-center" style={{ width: "18rem" }}>
			<img
				src="https://st2.depositphotos.com/9401436/43759/i/1600/depositphotos_437598108-stock-photo-winding-asphalt-road-dusk-high.jpg"
				className="card-img-top"
				alt="..."></img>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href="#" className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
};
