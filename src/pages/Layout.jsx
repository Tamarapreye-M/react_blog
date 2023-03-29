import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
	return (
		<div className="w-full max-w-full">
			<Navbar />
			<Outlet context={{ hello: world }} />
			<Footer />
		</div>
	);
};

export default Layout;
