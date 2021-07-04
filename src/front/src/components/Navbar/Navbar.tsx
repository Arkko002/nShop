import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import NavbarButton from "./NavbarButton/NavbarButton";

function Navbar() {
	return (
		<nav className="px-2 h-16 border-b-2 sticky z-50 w-screen flex justify-between">
			<div className="self-center">
				<span className="text-2xl font-bold text-blue-500">nShop</span>
			</div>

			<form className="flex h-8 justify-center self-center w-full">
				<input className="border w-1/2 outline-none focus:ring-2 focus:z-50" type="search"/>
				<div className="relative inline-block h-full text-gray-700">
					<select
						className="w-full h-full pl-3 pr-6 text-base placeholder-gray-600 border appearance-none focus:ring-2"
						placeholder="Regular input">
						<option>Category1</option>
						<option>Category2</option>
						<option>Category3</option>
					</select>
					<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
						<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
							<path
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							/>
						</svg>
					</div>
				</div>
				<input className="w-20 bg-blue-500 text-white hover:bg-blue-400 focus:ring-2" type="button" value="Search"/>
			</form>

			<div className="flex h-full">
				<NavbarButton link="/" name="Home" iconUrl={process.env.PUBLIC_URL + "/home.png"}/>
				<NavbarButton link="/cart" name="Products" iconUrl={process.env.PUBLIC_URL + "/cart.png"}/>
				<NavbarButton link="/user" name="Account" iconUrl={process.env.PUBLIC_URL + "/user.png"}/>
			</div>
		</nav>
	);
}

export default Navbar;
