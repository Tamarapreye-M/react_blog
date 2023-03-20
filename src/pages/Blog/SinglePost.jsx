import React from "react";
import { useParams } from "react-router-dom";

const SinglePost = () => {
	const { id } = useParams();
	return (
		<div>
			<h1 className=" text-blue-600">Hello, I am star boy, wizkid's mentor</h1>
			<p>{id}</p>
		</div>
	);
};

export default SinglePost;
