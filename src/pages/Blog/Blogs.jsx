import React from "react";
import { Link, useOutletContext } from "react-router-dom";

// import data from "./../../data/data";

const Blogs = () => {
	const [allPost, newForm] = useOutletContext();
	return (
		<>
			<div className="w-[300px] mx-auto mb-20 max-w-">
				<Link to="newpost" className=" bg-red-500 py-3 px-8 text-white ">
					to new post
				</Link>
			</div>
			<div className="w-3/4 mx-auto grid grid-cols-2 gap-10">
				{allPost.map((item) => {
					return (
						<Link to={item.id} key={item.id}>
							<div className="text-sm md:text-base bg-slate-50 sm:text-sm">
								<img src={item.image} alt="/" />
								<h1 className="text-2xl font-semibold py-2">{item.title}</h1>
								<p>{item.subTitle}</p>
								<p className="flex gap-1 pt-2">
									<span>{item.dateTime}</span>
									<span>.</span>
									<span>{item.duration}</span>
								</p>
							</div>
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default Blogs;
