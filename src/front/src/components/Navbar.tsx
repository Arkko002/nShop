import React from "react";
import {Link} from "react-router-dom";
import NavbarButton from "./Link/NavbarButton";
import NavbarLink from "./Link/NavbarLink";

function Navbar(): React.ReactElement {
	return (
		<nav className="sticky z-50 flex flex-col">
			<div className="flex justify-between w-screen h-16 px-2 border-b-1">
				<div className="self-center">
					<span className="text-2xl font-bold text-blue-500">nShop</span>
				</div>

				<form className="flex self-center justify-center w-full h-8">
					<input className="w-1/2 border outline-none focus:ring-2 focus:z-50" type="search"/>
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
					<input className="w-20 text-white bg-blue-500 hover:bg-blue-400 focus:ring-2" type="button" value="Search"/>
				</form>

				<div className="flex h-full">
					<NavbarButton link="/" name="Home" iconUrl={process.env.PUBLIC_URL + "/home.png"}/>
					<NavbarButton link="/cart" name="Products" iconUrl={process.env.PUBLIC_URL + "/cart.png"}/>
					<NavbarButton link="/user" name="Account" iconUrl={process.env.PUBLIC_URL + "/user.png"}/>
				</div>
			</div>
			
			<div className="flex justify-center h-8 bg-blue-100 border border-b-1">
				<div className="flex justify-between w-2/3 xl:w-1/2">
					<NavbarLink name="Today's Deals" link="fake"/>
					<NavbarLink name="Customer Service" link="fake"/>
					<NavbarLink name="Gift Cards" link="fake"/>
					<NavbarLink name="Registry" link="fake"/>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
