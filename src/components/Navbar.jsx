import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<div className="flex justify-between items-center p-3">
				<h1>
					<Link to="/" className="text-3xl">
						Navy
					</Link>
				</h1>
				<ul className="flex gap-4 items-center">
					<li>
						<Link to="episodes">Episodes</Link>
					</li>
					<li>
						<Link to="blog">Blog</Link>
					</li>
					<li>
						<Link to="about">About</Link>
					</li>
					<li>
						<Link to="contact">Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
