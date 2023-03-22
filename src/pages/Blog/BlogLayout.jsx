import React, { useState } from "react";
import data from "../../data/data";
import { Outlet } from "react-router-dom";

const BlogLayout = () => {
	const [allPost, setAllPost] = useState(data);
	const handlePost = (ev, id) => {
		ev.preventDefault();
		let { name, value } = ev.target;
		console.log(name, value);

		// const newPost = { [name]: value, id: allPost.length + 1 };

		// setAllPost((prev) => [...prev, newPost]);
	};

	return (
		<div>
			<Outlet context={[allPost, setAllPost, handlePost]} />
		</div>
	);
};

export default BlogLayout;
