import React from "react";
import { Link } from "react-router-dom";

import data from "./../../data/data";

const Blogs = () => {
	return (
		<>
			<div>
				<Link to="singlepost">to single post</Link>
				<br />
				<Link to="newpost">to new post</Link>
				<p>{data[0].title}</p>
			</div>
			<div>{data.map((item) => {})}</div>
		</>
	);
};

export default Blogs;
