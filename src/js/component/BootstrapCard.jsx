import React from "react";
import PropTypes from "prop-types";

const BootstrapCard = ({ image, title, description }) => {
	return (
		<div className="card text-center mb-3">
			<img src={image} className="card-img-top bg-secondary " alt="..." />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text ">{description}</p>
			</div>
			<div className="card-footer ">
				<a href="#" className="btn-sm btn-primary mx-auto">
					Find out more!
				</a>
			</div>
		</div>
	);
};

BootstrapCard.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string
};

export default BootstrapCard;
