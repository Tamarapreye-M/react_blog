import React, { useState } from "react";
import data from "../../data/data";
import { Outlet } from "react-router-dom";

const BlogLayout = () => {
	const [allPost, setAllPost] = useState(data);
	const [newForm, setNewForm] = useState({
		title: "",
		subTitle: "",
		body: "",
		image: "",
		duration: "",
		dateTime: "",
	});

	return (
		<div>
			<Outlet context={[allPost, setAllPost]} className="w-full max-w-full" />
		</div>
	);
};

export default BlogLayout;
