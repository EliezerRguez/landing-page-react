import React from "react";

//create your first component
const MenuHeader = () => {
	return (
		<ul className="navbar-nav ml-auto">
			<li className="nav-item active">
				<a className="nav-link fw-bold" href="#">
					Home <span className="sr-only">(current)</span>
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link fw-bold" href="#">
					About
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link fw-bold" href="#">
					Service
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link fw-bold" href="#">
					Contact
				</a>
			</li>
		</ul>
	);
};

export default MenuHeader;
