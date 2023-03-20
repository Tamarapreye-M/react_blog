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
			<div>
				{data.map((item) => {
					return (
						<div key={item.id}>
							<h1>{item.title}</h1>
							<p>{item.subTitle}</p>
							<p>{item.dateTime}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Blogs;
