import React from "react";
import PropTypes from "prop-types";

const Jumbotron = props => (
	<div className="jumbotron my-5">
		<h1 className="display-4">{props.title}</h1>
		<p className="lead">{props.description}</p>
		<a
			className="btn btn-primary btn-lg"
			href={props.buttonURL}
			role="button">
			{props.buttonLabel}
		</a>
	</div>
);

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};

document.querySelector("#app");

export default Jumbotron;

{
	/* <Jumbotron
title="A Warm Welcome!"
description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
buttonLabel="Call to action!"
buttonURL="#"
/> */
}
