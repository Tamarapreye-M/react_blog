import React from "react";
// import data from "../../data/data";
import { useParams, useOutletContext } from "react-router-dom";

const SinglePost = () => {
	const { id } = useParams();
	const [allPost] = useOutletContext();
	const post = allPost.find((each) => each.id === id);
	return (
		<div className="w-2/3 mx-auto flex flex-col gap-8 max-w-full">
			<div>
				<h1 className="text-3xl font-bold">{post.title}</h1>
				<p className="py-2">{post.subTitle}</p>
				<p className="flex gap-1">
					<span>{post.dateTime}</span>
					<span>.</span>
					<span>{post.duration}</span>
				</p>
			</div>
			<div>
				<img src={post.image} alt="" />
			</div>
			<p className="w-5/6 mx-auto pt-4">{post.body}</p>
		</div>
	);
};

export default SinglePost;
