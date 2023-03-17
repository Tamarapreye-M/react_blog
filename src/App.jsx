import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blog/Blogs";
import Layout from "./pages/Layout";
import Episodes from "./pages/Episodes";
import Missing from "./pages/Missing";
import Contact from "./pages/Contact";
import SinglePost from "./pages/Blog/SinglePost";
import BlogLayout from "./pages/Blog/BlogLayout";
import NewPost from "./pages/Blog/NewPost";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="episodes" element={<Episodes />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="blog" element={<BlogLayout />}>
						<Route index element={<Blogs />} />
						<Route path=":id" element={<SinglePost />} />
						<Route path="newpost" element={<NewPost />} />
					</Route>
					<Route path="*" element={<Missing />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
