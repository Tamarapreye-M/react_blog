import React from "react";
import { useOutletContext } from "react-router-dom";

const NewPost = () => {
	const [allPost, handleForm, handleSubmit] = useOutletContext();
	console.log(allPost);
	return (
		<div>
			<form action="" className="w-1/4 mx-auto" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-2 w-full mb-4">
					<label htmlFor="title">Enter Title</label>
					<input
						className=" bg-orange-200 px-4 py-2 focus:outline-offset-1 focus:outline-orange-600"
						type="text"
						name="title"
						onChange={handlePost}
					/>
				</div>
				<div className="flex flex-col gap-2 w-full mb-4">
					<label htmlFor="subTitle">Enter Sub-title</label>
					<input
						className=" bg-orange-200 px-4 py-2 focus:outline-offset-1 focus:outline-orange-600"
						type="text"
						name="subTitle"
						onChange={handlePost}
					/>
				</div>
				<div className="flex flex-col gap-2 w-full mb-4">
					<label htmlFor="duration">Enter Duration</label>
					<input
						className=" bg-orange-200 px-4 py-2 focus:outline-offset-1 focus:outline-orange-600"
						type="text"
						name="duration"
						onChange={handlePost}
					/>
				</div>
				<div className="flex flex-col gap-2 w-full mb-4">
					<label htmlFor="duration">Enter Date time</label>
					<input
						className=" bg-orange-200 px-4 py-2 focus:outline-offset-1 focus:outline-orange-600"
						type="text"
						name="dateTime"
						onChange={handlePost}
					/>
				</div>
				<div className="flex flex-col gap-2 w-full mb-4">
					<label htmlFor="body">Enter Body Text</label>
					<input
						className=" bg-orange-200 px-4 py-2 focus:outline-offset-1 focus:outline-orange-600"
						type="text"
						name="body"
						onChange={handlePost}
					/>
				</div>
				<div>
					<label htmlFor="image">Pick an image</label>
					<input type="file" name="image" id="" />
					<br />
					<label htmlFor="image">Or Enter image url</label>
					<br />
					<input
						className=" bg-orange-200 px-4 py-2 focus:outline-offset-1 focus:outline-orange-600 w-full"
						type="text"
						name="image"
						onChange={handlePost}
					/>
				</div>
				<div className="mt-5">
					<button
						className=" bg-orange-600 py-3 px-8 rounded-xl"
						type="submit"
						// value={allPost}
						// onSubmit={handleSubmit}
					>
						Submit{" "}
					</button>
				</div>
			</form>
		</div>
	);
};

export default NewPost;
